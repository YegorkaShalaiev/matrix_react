import {useState, useEffect, useMemo, useRef} from 'react'
import useWindow from '@/hooks/useWindow'
import { getRandomValueFromInterval } from '@/utils'
import { MATRIX_SPEED_MS } from '@/constants'

export default (): ICellMethods => {
	const { rows }: IGridParams = useWindow()
	const minDropLength: number = Math.ceil(rows / 6)
	const maxDropLength: number = Math.ceil(rows / 1.5)
	const [dropStart, setDropStart] = useState<number>(-1)
	const [prevDropLength, setPrevDropLength] = useState<number>(0)
	const [dropLength, setDropLength] = useState<number>(() => {
		return getRandomValueFromInterval(minDropLength, maxDropLength)
	})

	const dropStartRef = useRef<number>(dropStart)
	const dropEnd = useMemo<number>(() => dropStart - dropLength, [dropStart, dropLength])

	const isVisible = (index: number): boolean => {
		const isInDrop = index <= dropStart && index >= dropEnd

		if (prevDropLength) {
			const isPrevDropTailVisible = dropStart - prevDropLength < 0

			return isPrevDropTailVisible
				? isInDrop || index > rows - (prevDropLength - dropStart + 1)
				: isInDrop
		}

		return isInDrop
	}

	const isActive = (index: number): boolean => index === dropStart

	useEffect(() => {
		let intervalId: NodeJS.Timeout

		const delay: number = getRandomValueFromInterval(MATRIX_SPEED_MS * 10, MATRIX_SPEED_MS * 500)
		
		setTimeout(() => {
			intervalId = setInterval(() => {
				dropStartRef.current = (dropStartRef.current + 1) % rows
				setDropStart(() => dropStartRef.current)

				if (dropStartRef.current === rows - 1) {
					setPrevDropLength(() => dropLength)
					setDropLength(() => getRandomValueFromInterval(minDropLength, maxDropLength))
				}
			}, MATRIX_SPEED_MS)
		}, delay)

		return () => clearInterval(intervalId)
	}, [])

	return {
		isVisible,
		isActive,
	}
}