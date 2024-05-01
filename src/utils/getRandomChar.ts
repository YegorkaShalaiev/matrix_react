export default (): string => {
	const lowercaseLatin = 'abcdefghijklmnopqrstuvwxyz'
	const uppercaseLatin = lowercaseLatin.toUpperCase()
	const lowercaseRussian = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
	const uppercaseRussian = lowercaseRussian.toUpperCase()
	const punctuation = '!@#$%^&*()-_=+[{]};:,<.>/?`~'
	const mathSymbols = '0123456789'

	const allChars = lowercaseLatin + uppercaseLatin + lowercaseRussian + uppercaseRussian + punctuation + mathSymbols
	const randomIndex = Math.floor(Math.random() * allChars.length)

	return allChars[randomIndex]
}