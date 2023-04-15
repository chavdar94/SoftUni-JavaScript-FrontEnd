window.addEventListener('load', solve);

function solve() {
	const inputFields = {
		model: document.querySelector('#model'),
		year: document.querySelector('#year'),
		description: document.querySelector('#description'),
		price: document.querySelector('#price')
	}

	const otherInputs = {
		addBtn: document.querySelector('#add'),
		furnitureList: document.querySelector('#furniture-list'),
		totalCost: document.querySelector('.total-price')
	}

	let currentPrice = 0

	const validFields = (dataFromInput) => dataFromInput.every((field) => field.value.trim().length !== 0)
	const clearFields = (dataFromInput) => dataFromInput.forEach((field) => field.value = '')
	otherInputs.addBtn.addEventListener('click', addFurniture)

	function addFurniture(e) {
		e.preventDefault()
		const data = Object.values(inputFields)

		if (!validFields(data) || inputFields.year.value < 0 || inputFields.price.value < 0) {
			return
		}

		createFurnitureRow(data)
		clearFields(data)
	}

	function createFurnitureRow(data) {
		[model, year, desc, price] = data
		const tr = createElement('tr', null, otherInputs.furnitureList, null, ['info'])
		createElement('td', model.value, tr)
		createElement('td', Number(price.value).toFixed(2), tr)
		const btnTd = createElement('td', null, tr)
		const infoBtn = createElement('button', 'More Info', btnTd, null, ['moreBtn'])
		const buyBtn = createElement('button', 'Buy it', btnTd, null, ['buyBtn'])
		const hiddenTr = createElement('tr', null, otherInputs.furnitureList, null, ['hide'])
		createElement('td', `Year: ${year.value}`, hiddenTr)
		createElement('td', `Description: ${desc.value}`, hiddenTr, null, null, {colspan: '3'})

		infoBtn.addEventListener('click', showMoreInfo)
		buyBtn.addEventListener('click', buyFurniture)

	}

	function divHiddenIndex(data) {
		const allDivs = Array.from(document.querySelectorAll('.info'))
		for (const idx in allDivs) {
			if (data === allDivs[idx]) {
				return idx
			}
		}
	}

	function showMoreInfo(e) {
		const currentElement = e.currentTarget
		const index = divHiddenIndex(currentElement.parentElement.parentElement)
		const divHide = Array.from(document.querySelectorAll('.hide'))[index]

		if (currentElement.textContent === 'More Info') {
			currentElement.textContent = 'Less Info'
			divHide.style.display = 'contents'
		} else {
			currentElement.textContent = 'More Info'
			divHide.style.display = 'none'
		}
	}

	function buyFurniture(e) {
		const currentElement = e.currentTarget.parentElement.parentElement
		const price = Array.from(currentElement.querySelectorAll('td'))[1]
		currentPrice += Number(price.textContent)
		otherInputs.totalCost.textContent = currentPrice.toFixed(2)
		currentElement.remove()
	}

	function createElement(type, content, parentNode, id, classes, attrs) {
		const htmlElement = document.createElement(type);

		if (content && type !== 'input') {
			htmlElement.textContent = content;
		}

		if (content && type === 'input') {
			htmlElement.value = content;
		}

		if (id) {
			htmlElement.id = id;
		}

		if (classes) {
			htmlElement.classList.add(...classes);
		}

		if (parentNode) {
			parentNode.appendChild(htmlElement);
		}

		if (attrs) {
			for (const key in attrs) {
				htmlElement.setAttribute(key, attrs[key]);
			}
		}

		return htmlElement;

	}
}
