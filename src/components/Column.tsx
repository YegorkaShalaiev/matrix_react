import React, { useEffect, useMemo, useState } from 'react'
import Cell from '@/components/Cell'
import useWindow from '@/hooks/useWindow'
import useActiveCell from '@/hooks/useActiveCell'
import { getColumnChars } from '@/helpers'
import { getRandomValueFromInterval } from '@/utils'
import '@/styles/app.scss'

const Column: React.FC = () => {
	const { rows }: Pick<IGridParams, 'rows'> = useWindow()
	const chars: string[] = useMemo(() => getColumnChars(rows), [rows])
	const activeCell : number = useActiveCell()
	const minVisibleCellsAmount: number = rows / 6
	const maxVisibleCellsAmount: number = rows - minVisibleCellsAmount
	const [dropTailLength] = useState(
		getRandomValueFromInterval(minVisibleCellsAmount, maxVisibleCellsAmount),
	)
	const [isFirstDrop, setIsFirstDrop] = useState(true)

	useEffect(() => {
		if (activeCell === rows - 1 && isFirstDrop) {
			setIsFirstDrop(false)
		}
	}, [activeCell])

	const isCellVisible = (index: number): boolean => {
		const isInDropWithTail = index <= activeCell && index > activeCell - dropTailLength
		const isAfterDropTail = index > activeCell + (rows - dropTailLength)

		return isInDropWithTail || !isFirstDrop && isAfterDropTail
	}

	return (
		<div className="column">
			{
				chars.map((char: string, index: number) => (
					<Cell
						key={index}
						char={char}
						isActive={index === activeCell}
						isVisible={isCellVisible(index)}
					/>
				))
			}
		</div>
	)
}

export default Column