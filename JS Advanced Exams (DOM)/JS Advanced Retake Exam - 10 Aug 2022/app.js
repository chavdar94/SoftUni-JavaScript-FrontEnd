window.addEventListener("load", solve);


function solve() {
	const inputFields = {
		firstName: document.querySelector('#first-name'),
		lastName: document.querySelector('#last-name'),
		age: document.querySelector('#age'),
		gender: document.querySelector('#genderSelect'),
		dishInformation: document.querySelector('#task')
	}

	const values = {
		firstName: null,
		lastName: null,
		age: null,
		gender: null,
		dishInformation: null
	}

	const buttons = {
		submitBtn: document.querySelector('#form-btn'),
		clearBtn: document.querySelector('#clear-btn')
	}

	const otherSelectors = {
		inProgressUl: document.querySelector('#in-progress'),
		finishedUl: document.querySelector('#finished'),
		counter: document.querySelector('#progress-count')
	}

	buttons.submitBtn.addEventListener('click', submitHandler)
	buttons.clearBtn.addEventListener('click', clearAllFields)

	let count = 0

	function validInput() {
		for (const field in inputFields) {
			if (inputFields[field].value.trim().length === 0) {
				return false
			}
		}
		return true
	}

	function clearFields() {
		Object.values(inputFields).forEach((field) => field.value = '')
	}

	function createLiElement() {
		const li = createElement('li', null, otherSelectors.inProgressUl, null, ['each-line'])
		const article = createElement('article', null, li)
		createElement('h4', `${inputFields.firstName.value} ${inputFields.lastName.value}`, article)
		createElement('p', `${inputFields.gender.value}, ${inputFields.age.value}`, article)
		createElement('p', `Dish description: ${inputFields.dishInformation.value}`, article)
		const editBtn = createElement('button', 'Edit', li, null, ['edit-btn'])
		const completeBtn = createElement('button', 'Mark as complete', li, null, ['complete-btn'])

		editBtn.addEventListener('click', editFieldHandler)
		completeBtn.addEventListener('click', completeFieldHandler)

	}

	function submitHandler(e) {
		e.preventDefault()
		if (!validInput()) {
			return
		}
		for (const field in inputFields) {
			values[field] = inputFields[field].value
		}

		createLiElement()
		clearFields()
		count++
		otherSelectors.counter.innerText = count
	}

	function editFieldHandler(event) {
		const parent = event.currentTarget.parentElement
		parent.parentElement.removeChild(parent)

		for (const field in inputFields) {
			inputFields[field].value = values[field]
		}

		count--
		otherSelectors.counter.innerText = count
	}

	function completeFieldHandler(event) {
		const parent = event.currentTarget.parentElement
		const buttons = Array.from(parent.querySelectorAll('button'))
		for (const btn of buttons) {
			parent.removeChild(btn)
		}
		otherSelectors.finishedUl.appendChild(parent)
		count--
		otherSelectors.counter.innerText = count
	}

	function clearAllFields() {
		otherSelectors.finishedUl.innerHTML = ''
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