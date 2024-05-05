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

export const getRandomValueFromInterval = (min: number, max: number): number => {
	const intervalLength = max - min + 1

	return Math.round(Math.random() * intervalLength + min)
}