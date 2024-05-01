import React from 'react'

import Column from './Column'

import useGrid from '../hooks/useGrid'

import '../styles/app.scss'


const Layout: React.FC = () => {
	const { cols } = useGrid()

	return (
		<div className="layout">
			{
				Array
					.from({ length: cols })
					.map((_, index) => (
						<Column key={index}/>
					))
			}
		</div>
	)
}

export default Layout