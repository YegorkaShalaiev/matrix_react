import React, { useMemo } from 'react'
import Cell from '@/components/Cell'
import useWindow from '@/hooks/useWindow'
import useMatrix from '@/hooks/useMatrix'
import { getColumnChars } from '@/utils'
import '@/styles/app.scss'

const Column: React.FC = () => {
	const { rows }: { rows: number } = useWindow()
	const chars: string[] = useMemo(() => getColumnChars(rows), [rows])
	const activeCell: number = useMatrix()

	return (
		<div className="column">
			{
				chars.map((char: string, index: number) => (
					<Cell
						key={index}
						char={char}
						isActive={index === activeCell}
						isBlank={index > activeCell}
					/>
				))
			}
		</div>
	)
}

export default Column