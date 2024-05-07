import { useState, useEffect, useMemo } from 'react'
import useWindow from '@/hooks/useWindow'
import { getRandomValueFromInterval } from '@/utils'
import { MATRIX_SPEED_MS } from '@/constants'

export default (): ICellMethods => {
	const { rows }: IGridParams = useWindow()
	const minDropLength: number = Math.ceil(rows / 8)
	const maxDropLength: number = Math.ceil(rows / 2)
	const [dropStart, setDropStart] = useState<number>(-1)
	const [prevDropLength, setPrevDropLength] = useState<number>(0)
	const [dropLength, setDropLength] = useState<number>(() => {
		return getRandomValueFromInterval(minDropLength, maxDropLength)
	})

	const dropEnd = useMemo<number>(() => dropStart - dropLength, [dropStart, dropLength])

	const isVisible = (index: number): boolean => {
		const isInDrop = index <= dropStart && index >= dropEnd

		if (prevDropLength) {
			const isPrevDropTailVisible = dropStart - prevDropLength < 0

			return isPrevDropTailVisible
				? index > rows - (prevDropLength - dropStart + 1) || isInDrop
				: isInDrop
		}

		return isInDrop
	}

	const isActive = (index: number): boolean => index === dropStart

	useEffect(() => {
		if (dropStart === rows - 1) {
			setPrevDropLength(() => dropLength)
			setDropLength(() => getRandomValueFromInterval(minDropLength, maxDropLength))
		}
	}, [dropStart])

	useEffect(() => {
		let intervalId: NodeJS.Timeout

		const delay: number = getRandomValueFromInterval(MATRIX_SPEED_MS * 10, MATRIX_SPEED_MS * 500)
		
		setTimeout(() => {
			intervalId = setInterval(() => {
				setDropStart(prevValue => (prevValue + 1) % rows)
			}, MATRIX_SPEED_MS)
		}, delay)

		return () => clearInterval(intervalId)
	}, [])

	return {
		isVisible,
		isActive,
	}
}