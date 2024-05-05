import { useState, useEffect } from 'react'

import { GRID_CELL_WIDTH, GRID_CELL_HEIGHT } from '@/constants'

export default (): IGridParams => {
	const calculateColsAmount = (): number => Math.ceil( window.innerWidth / GRID_CELL_WIDTH )
	const calculateRowsAmount = (): number => Math.ceil( window.innerHeight / GRID_CELL_HEIGHT )

	const [cols, setCols] = useState( calculateColsAmount() )
	const [rows, setRows] = useState( calculateRowsAmount() )

	useEffect( () => {
		function handleResize() {
			setCols( calculateColsAmount() )
			setRows( calculateRowsAmount() )
		}

		window.addEventListener( 'resize', handleResize )

		return () => window.removeEventListener( 'resize', handleResize )
	}, [] )

	return { cols, rows }
}