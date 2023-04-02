function encodeAndDecodeMessages() {
	const [input, output] = document.querySelectorAll('textarea')
	const [encodeBtn, decodeBtn] = document.querySelectorAll('button')

	encodeBtn.addEventListener('click', encodeHandler)
	decodeBtn.addEventListener('click', decodeHandler)

	function encodeHandler() {
		let result = ''
		for (const char of input.value) {
			result += String.fromCharCode(char.charCodeAt(0) + 1)
		}
		input.value = ''
		output.value = result
	}

	function decodeHandler() {
		let result = ''
		for (const char of output.value) {
			result += String.fromCharCode(char.charCodeAt(0) - 1)
		}
		output.value = result
	}

}