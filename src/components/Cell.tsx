import React from 'react'
import { GRID_CELL_WIDTH, GRID_CELL_HEIGHT } from '@/constants'
import '@/styles/app.scss'

interface IProps {
	char: string
	isActive: boolean
	isBlank: boolean
}

const Cell: React.FC<IProps> = ( { char, isActive, isBlank } ) => {
	return (
		<div
			className={`cell ${isActive ? 'active' : ''} ${isBlank ? 'blank' : ''}`}
			style={{ width: GRID_CELL_WIDTH, height: GRID_CELL_HEIGHT }}
		>
			<span>
				{ char }
			</span>
		</div>
	)
}

export default Cell