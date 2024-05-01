import React from 'react'

import Cell from '@/components/Cell'

import useGrid from '@/hooks/useGrid'

import '@/styles/app.scss'

const Column: React.FC = () => {
	const { rows } = useGrid()

	return (
		<div className="column">
			{
				Array
					.from({ length: rows })
					.map((_, index) => (
						<Cell key={index}/>
					))
			}
		</div>
	)
}

export default Column