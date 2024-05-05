import { useState, useEffect, useCallback } from 'react'
import useWindow from '@/hooks/useWindow'
import { getRandomValueFromInterval } from '@/utils'
import { MATRIX_SPEED_MS } from '@/constants'

export default (): number => {
	const { rows } : Pick<IGridParams, 'rows'> = useWindow()
	const [activeCell, setActiveCell] = useState(-1)

	const updateActiveCell = useCallback(() => {
		setActiveCell(prevActiveCell => (prevActiveCell + 1) % rows)
	}, [])

	useEffect(() => {
		let intervalId: NodeJS.Timeout
		const delay: number = getRandomValueFromInterval(MATRIX_SPEED_MS * 10, MATRIX_SPEED_MS * 300)
		
		setTimeout(() => {
			intervalId = setInterval(() => updateActiveCell(), MATRIX_SPEED_MS)
		}, delay)

		return () => clearInterval(intervalId)
	}, [])

	return activeCell
}