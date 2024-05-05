import { getRandomChar } from '@/utils'

export const getColumnChars = ( rows: number ): string[] => {
	return Array.from({ length: rows }, () => getRandomChar())
}