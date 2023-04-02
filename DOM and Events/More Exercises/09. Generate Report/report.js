function generateReport() {
	const checkBoxes = Array.from(document.querySelectorAll('thead > tr > th > input[type=checkbox]'))
	const table = Array.from(document.querySelectorAll('table > tbody > tr'))
	const output = document.querySelector('#output')

	let checkedRows = []
	let checkedIndexes = []

	for (const checkBox of checkBoxes) {
		if (checkBox.checked) {
			const idx = checkBoxes.indexOf(checkBox)
			checkedIndexes.push(idx)
		}
	}

	for (const row of table) {
		const children = Array.from(row.children)
		let obj = {}
		for (const idx of checkedIndexes) {
			obj[checkBoxes[idx].name] = children[idx].textContent
		}
		checkedRows.push(obj)
	}

	output.textContent = JSON.stringify(checkedRows)
}