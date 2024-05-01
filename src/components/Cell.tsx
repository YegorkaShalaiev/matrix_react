import React from 'react'
import getRandomChar from '@/utils/getRandomChar'
import { GRID_CELL_WIDTH, GRID_CELL_HEIGHT } from '@/constants/grid'
import '@/styles/app.scss'

const Cell: React.FC = () => {
	return (
		<div className="cell" style={{ width: GRID_CELL_WIDTH, height: GRID_CELL_HEIGHT }}>
			<span>
				{ getRandomChar() }
			</span>
		</div>
	)
}

export default Cell