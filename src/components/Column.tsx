import React, { useMemo } from 'react'
import Cell from '@/components/Cell'
import useWindow from '@/hooks/useWindow'
import useCell from '@/hooks/useCell'

import { getColumnChars } from '@/helpers'
import '@/styles/app.scss'

const Column: React.FC = () => {
	const { rows }: IGridParams = useWindow()
	const chars: string[] = useMemo(() => getColumnChars(rows), [rows])
	
	const { isVisible, isActive } : ICellMethods = useCell()

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