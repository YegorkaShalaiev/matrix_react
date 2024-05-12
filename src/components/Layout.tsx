import React from 'react'
import Column from '@/components/Column'
import useWindow from '@/hooks/useWindow'
import '@/styles/app.scss'

const Layout: React.FC = () => {
	const { cols, rows } : IGridParams = useWindow()

	return (
		<div className="layout">
			{
				Array
					.from( { length: cols } )
					.map(( _, index ) => (
						<Column
							key={index}
							cols={cols}
							rows={rows}
						/>
					))
			}
		</div>
	)
}

export default Layout