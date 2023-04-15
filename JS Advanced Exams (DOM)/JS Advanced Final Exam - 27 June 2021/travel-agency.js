window.addEventListener('load', travelAgency);

function travelAgency() {
	const inputFields = {
		fullName: document.querySelector('#fname'),
		email: document.querySelector('#email'),
		phoneNumber: document.querySelector('#phone'),
		address: document.querySelector('#address'),
		postalCode: document.querySelector('#code'),
	}

	const otherSelectors = {
		submitBtn: document.querySelector('#submitBTN'),
		infoPreview: document.querySelector('#infoPreview'),
		editBtn: document.querySelector('#editBTN'),
		continueBtn: document.querySelector('#continueBTN'),
		block: document.querySelector('#block')
	}

	const inputValues = {
		fullName: null,
		email: null,
		phoneNumber: null,
		address: null,
		postalCode: null
	}

	const clearFields = (dataFromInput) => dataFromInput.forEach((field) => field.value = '')
	otherSelectors.submitBtn.addEventListener('click', addReservation)
	otherSelectors.editBtn.addEventListener('click', editReservation)
	otherSelectors.continueBtn.addEventListener('click', finishReservation)

	function parseDataFromInput() {
		for (const field in inputFields) {
			inputValues[field] = inputFields[field].value
		}
	}

	function addReservation(e) {
		e.preventDefault()
		const data = Object.values(inputFields)

		if (!inputFields.fullName.value || !inputFields.email.value) {
			return
		}
		parseDataFromInput()
		createReservation(data)
		clearFields(data)
		otherSelectors.submitBtn.disabled = true
		otherSelectors.editBtn.disabled = false
		otherSelectors.continueBtn.disabled = false
	}

	function createReservation(data) {
		[fname, email, number, address, code] = data
		createElement('li', `Full Name: ${fname.value}`, otherSelectors.infoPreview)
		createElement('li', `Email: ${email.value}`, otherSelectors.infoPreview)
		createElement('li', `Phone Number: ${number.value}`, otherSelectors.infoPreview)
		createElement('li', `Address: ${address.value}`, otherSelectors.infoPreview)
		createElement('li', `Postal Code: ${code.value}`, otherSelectors.infoPreview)
	}
	
	function editReservation() {
		for (const field in inputFields) {
			inputFields[field].value = inputValues[field]
		}
		const children = Array.from(otherSelectors.infoPreview.children)
		for (const child of children) {
			otherSelectors.infoPreview.removeChild(child)
		}
		otherSelectors.editBtn.disabled = true
		otherSelectors.continueBtn.disabled = true
		otherSelectors.submitBtn.disabled = false
	}

	function finishReservation() {
		otherSelectors.block.innerHTML = ''
		createElement('h3', 'Thank you for your reservation!', otherSelectors.block)
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
