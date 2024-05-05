import { MATRIX_SPEED_MS } from '@/constants'

export const getRandomChar = (): string => {
	const lowercaseLatin = 'abcdefghijklmnopqrstuvwxyz'
	const uppercaseLatin = lowercaseLatin.toUpperCase()
	const lowercaseRussian = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
	const uppercaseRussian = lowercaseRussian.toUpperCase()
	const punctuation = '!@#$%^&*()-_=+[{]};:,<.>/?`~'
	const mathSymbols = '0123456789'

	const allChars = lowercaseLatin + uppercaseLatin + lowercaseRussian + uppercaseRussian + punctuation + mathSymbols
	const randomIndex = Math.floor( Math.random() * allChars.length )

	return allChars[randomIndex]
}

export const getColumnChars = ( rows: number ): string[] => {
	return Array.from({ length: rows }, () => getRandomChar())
}

export const getRandomizedDelay = (): number => {
	const minDelay = MATRIX_SPEED_MS * 10
	const maxDelay = MATRIX_SPEED_MS * 100

	return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay
}