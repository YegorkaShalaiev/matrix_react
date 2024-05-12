import React, { useMemo } from 'react'
import Cell from '@/components/Cell'
import useCell from '@/hooks/useCell'

import { getColumnChars } from '@/helpers'
import '@/styles/app.scss'

const Column: React.FC<IGridParams> = ({ cols, rows }) => {
	const chars: string[] = useMemo(() => getColumnChars(rows), [rows])
	
	const { isVisible, isActive } : ICellMethods = useCell({ cols, rows })

	return (
		<div className="column">
			{
				chars.map((char: string, index: number) => (
					<Cell
						key={index}
						char={char}
						isActive={isActive(index)}
						isVisible={isVisible(index)}
					/>
				))
			}
		</div>
	)
}

export default Column