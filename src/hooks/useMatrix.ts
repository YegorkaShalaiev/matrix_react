import { useState, useEffect, useCallback } from 'react'
import useWindow from '@/hooks/useWindow'
import { MATRIX_SPEED_MS } from '@/constants'
import { getRandomizedDelay } from '@/utils'

export default (): number => {
	const { rows } : { rows: number } = useWindow()
	const [activeCell, setActiveCell] = useState(-1)

	const updateActiveCell = useCallback(() => {
		setActiveCell(prevActiveCell => (prevActiveCell + 1) % rows)
	}, [rows])

	useEffect(() => {
		let intervalId: NodeJS.Timeout
		
		setTimeout(() => {
			intervalId = setInterval(updateActiveCell, MATRIX_SPEED_MS)
		}, getRandomizedDelay())

		return () => clearInterval(intervalId)
	}, [updateActiveCell])

	return activeCell
}