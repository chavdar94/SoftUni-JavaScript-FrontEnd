function solve() {
	const inputFields = {
		firstName: document.querySelector('#fname'),
		lastName: document.querySelector('#lname'),
		email: document.querySelector('#email'),
		birthDate: document.querySelector('#birth'),
		position: document.querySelector('#position'),
		salary: document.querySelector('#salary'),
	}

	const otherFields = {
		addWorkerBtn: document.querySelector('#add-worker'),
		tbody: document.querySelector('#tbody'),
		salarySum: document.querySelector('#sum'),
	}

	let currentSum = 0

	otherFields.addWorkerBtn.addEventListener('click', addWorker)
	const validateFields = (dataFromInput) => dataFromInput.every((field) => field.value.trim().length !== 0)
	const clearFields = (dataFromInput) => dataFromInput.forEach((field) => field.value = '')

	function createWorker(data) {
		[firstName, lastName, email, birthDate, position, salary] = data
		const tr = createElement('tr', null, otherFields.tbody)
		createElement('td', firstName.value, tr)
		createElement('td', lastName.value, tr)
		createElement('td', email.value, tr)
		createElement('td', birthDate.value, tr)
		createElement('td', position.value, tr)
		createElement('td', salary.value, tr)
		const btnTd = createElement('td', null, tr)
		const firedBtn = createElement('button', 'Fired', btnTd, null, ['fired'])
		const editBtn = createElement('button', 'Edit', btnTd, null, ['edit'])

		editBtn.addEventListener('click', editWorker)
		firedBtn.addEventListener('click', fireWorker)
	}

	function addWorker(e) {
		e.preventDefault()
		const data = Object.values(inputFields)
		if (!validateFields(data)){
			return
		}
		currentSum += Number(inputFields.salary.value)
		otherFields.salarySum.textContent = currentSum.toFixed(2)
		createWorker(data)
		clearFields(data)
	}

	function editWorker(e) {
		const currentElement = e.target.parentElement.parentElement
		const children = Array.from(currentElement.children)
		inputFields.firstName.value = children[0].textContent
		inputFields.lastName.value = children[1].textContent
		inputFields.email.value = children[2].textContent
		inputFields.birthDate.value = children[3].textContent
		inputFields.position.value = children[4].textContent
		inputFields.salary.value = children[5].textContent

		currentSum -= Number(children[5].textContent)
		otherFields.salarySum.textContent = currentSum.toFixed(2)
		currentElement.remove()
	}

	function fireWorker(e) {
		const currentElement = e.target.parentElement.parentElement
		const children = Array.from(currentElement.children)
		currentSum -= Number(children[5].textContent)
		otherFields.salarySum.textContent = currentSum.toFixed(2)
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

solve()