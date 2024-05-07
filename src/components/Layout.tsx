import React from 'react'
import Column from '@/components/Column'
import useWindow from '@/hooks/useWindow'
import '@/styles/app.scss'

const Layout: React.FC = () => {
	const { cols } : IGridParams = useWindow()

	return (
		<div className="layout">
			{
				Array
					.from( { length: cols } )
					.map(( _, index ) => (
						<Column key={index}/>
					))
			}
		</div>
	)
}

export default Layout