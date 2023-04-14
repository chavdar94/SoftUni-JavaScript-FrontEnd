window.addEventListener('load', solve);

function solve() {
	const inputFields = {
		make: document.querySelector('#make'),
		model: document.querySelector('#model'),
		year: document.querySelector('#year'),
		fuel: document.querySelector('#fuel'),
		originalCost: document.querySelector('#original-cost'),
		sellingPrice: document.querySelector('#selling-price'),
	};

	const otherSelectors = {
		publishBtn: document.querySelector('#publish'),
		tbody: document.querySelector('#table-body'),
		profit: document.querySelector('#profit'),
		carList: document.querySelector('#cars-list'),
	};

	let currentProfit = 0;

	const checkFields = (dataFromInput) => dataFromInput.every((item) => item.value.trim().length !== 0);

	const clearInputFields = (dataFromInput) => dataFromInput.forEach((field) => (field.value = ''));

	function createCarTable(data) {
		const [make, model, year, fuel, originalCost, sellingPrice] = data;
		const tr = createElement('tr', null, otherSelectors.tbody, null, ['row']);
		createElement('td', make.value, tr);
		createElement('td', model.value, tr);
		createElement('td', year.value, tr);
		createElement('td', fuel.value, tr);
		createElement('td', originalCost.value, tr);
		createElement('td', sellingPrice.value, tr);
		const editBtn = createElement('button', 'Edit', tr, null, [
			'action-btn',
			'edit',
		]);
		const sellBtn = createElement('button', 'Sell', tr, null, [
			'action-btn',
			'sell',
		]);

		editBtn.addEventListener('click', editCar);
		sellBtn.addEventListener('click', sellCar);
	}

	otherSelectors.publishBtn.addEventListener('click', addCar);

	function addCar(e) {
		e.preventDefault();
		const data = Object.values(inputFields);

		if (
			!checkFields(data) ||
			Number(inputFields.sellingPrice.value) < inputFields.originalCost.value
		) {
			return;
		}
		createCarTable(data);
		clearInputFields(data);
	}

	function editCar(e) {
		const currentElement = e.target.parentElement;
		const children = Array.from(currentElement.children);
		inputFields.make.value = children[0].textContent;
		inputFields.model.value = children[1].textContent;
		inputFields.year.value = children[2].textContent;
		inputFields.fuel.value = children[3].textContent;
		inputFields.originalCost.value = children[4].textContent;
		inputFields.sellingPrice.value = children[5].textContent;

		currentElement.remove();
	}

	function sellCar(e) {
		const currentElement = e.target.parentElement;
		const children = Array.from(currentElement.children);

		const carName = `${children[0].textContent} ${children[1].textContent}`;
		const profitCar =
			Number(children[5].textContent) - Number(children[4].textContent);

		const li = createElement('li', null, otherSelectors.carList, null, [
			'each-list',
		]);
		createElement('span', carName, li);
		createElement('span', `${children[2].textContent}`, li);
		createElement('span', profitCar, li);

		currentProfit += profitCar;
		otherSelectors.profit.textContent = currentProfit.toFixed(2);

		currentElement.remove();
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
