import { useState, useEffect } from 'react'
import useWindow from '@/hooks/useWindow'
import { getRandomValueFromInterval } from '@/utils'
import { MATRIX_SPEED_MS } from '@/constants'

export default (): ICellMethods => {
	let intervalId: NodeJS.Timeout
	let timeoutId: NodeJS.Timeout

	const { rows, cols }: IGridParams = useWindow()
	const minDropLength: number = Math.ceil(rows / 10)
	const maxDropLength: number = Math.ceil(rows / 1.5)
	const [dropStart, setDropStart] = useState<number>(-1)
	const [prevDropLength, setPrevDropLength] = useState<number>(0)
	const [dropLength, setDropLength] = useState<number>(() => {
		return getRandomValueFromInterval(minDropLength, maxDropLength)
	})

	const isVisible = (index: number): boolean => {
		const isInDrop = index <= dropStart && index >= dropStart - dropLength

		if (!prevDropLength) { // at first loop
			return isInDrop
		}

		if (dropStart === rows - 1) {  // at last step of every loop
			return index > rows - prevDropLength - 1
		}

		if (dropStart - prevDropLength < 0) { // at next loops (except first) when tail of prev drop is still visible
			return index > rows - (prevDropLength - dropStart + 1) || isInDrop
		}

		return isInDrop
	}

	const isActive = (index: number): boolean => index === dropStart

	const reset = () : void => {
		setDropStart(-1)
		setPrevDropLength(0)
		clearInterval(intervalId)
		clearTimeout(timeoutId)
	}

	useEffect(() => {
		if (dropStart === rows - 1) {
			setPrevDropLength(() => dropLength)
			setDropLength(() => getRandomValueFromInterval(minDropLength, maxDropLength))
		}
	}, [dropStart])

	useEffect(() => {
		const delay: number = getRandomValueFromInterval(MATRIX_SPEED_MS * 5, MATRIX_SPEED_MS * 300)

		timeoutId = setTimeout(() => {
			intervalId = setInterval(() => {
				setDropStart(prevValue => (prevValue + 1) % rows)
			}, MATRIX_SPEED_MS)
		}, delay)

		return () => reset()
	}, [cols, rows])

	return {
		isVisible,
		isActive,
	}
}