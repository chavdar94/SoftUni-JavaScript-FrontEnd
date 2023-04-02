function solve() {
	const decimalNumber = document.querySelector('#input')
	const selectToMenu = document.querySelector('#selectMenuTo')
	const convertButton = document.querySelector('#container > button')
	const resultField = document.querySelector('#result')

	convertButton.addEventListener('click', convertHandler)

	const options = {
		'Binary': 'binary',
		'Hexadecimal': 'hexadecimal'
	}

	for (const key in options) {
		const option = document.createElement('option')
		option.value = options[key]
		option.text = key
		selectToMenu.appendChild(option)
	}

	function convertHandler() {
		const choice = selectToMenu.value
		if (choice === 'binary') {
			resultField.value = Number(decimalNumber.value).toString(2)

		} else if (choice === 'hexadecimal') {
			resultField.value = Number(decimalNumber.value).toString(16).toUpperCase()
		}
	}
}