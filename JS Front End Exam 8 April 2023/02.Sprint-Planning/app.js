window.addEventListener('load', solve);

function solve() {
	const inputFields = {
		title: document.querySelector('#title'),
		description: document.querySelector('#description'),
		select: document.querySelector('#label'),
		points: document.querySelector('#points'),
		assignee: document.querySelector('#assignee')
	}

	const buttonsForm = {
		createBtn: document.querySelector('#create-task-btn'),
		deleteBtn: document.querySelector('#delete-task-btn')
	}

	const otherFields = {
		totalPoints: document.querySelector('#total-sprint-points'),
		tasksSection: document.querySelector('#tasks-section'),
		hiddenField: document.querySelector('#task-id')
	}

	const values = {
		title: null,
		description: null,
		select: null,
		points: null,
		assignee: null
	}

	const icons = {
		'Feature': ['&#8865', 'feature'],
		'Low Priority Bug': ['&#9737', 'low-priority'],
		'High Priority Bug': ['&#9888', 'high-priority'],
	}
	let id = 0
	let currentPoints = 0
	buttonsForm.createBtn.addEventListener('click', createNewTask)
	buttonsForm.deleteBtn.addEventListener('click', deleteTask)

	function createNewTask(event) {
		event.preventDefault()
		if (!checkValidFields()) {
			return
		}
		id++
		const selectOption = inputFields.select.value
		const article = createElement('article', null, otherFields['tasksSection'], `task-${id}`, ['task-card'])
		const iconDiv = createElement('div', null, article, null, ['task-card-label', icons[selectOption][1]])
		iconDiv.innerHTML = `${selectOption} ${icons[selectOption][0]}`
		createElement('h3', inputFields.title.value, article, null, ['task-card-title'])
		createElement('p', inputFields.description.value, article, null, ['task-card-description'])
		createElement('div', `Estimated at ${inputFields.points.value} pts`, article, null, ['task-card-points'])
		createElement('div', `Assigned to: ${inputFields.assignee.value}`, article, null, ['task-card-assignee'])
		const btnDiv = createElement('div', null, article, null, ['task-card-actions'])
		const taskDeleteBtn = createElement('button', 'Delete', btnDiv)
		currentPoints += Number(inputFields.points.value)
		otherFields.totalPoints.textContent = `Total Points ${currentPoints}pts`

		taskDeleteBtn.addEventListener('click', moveValuesToForm)
		clearFields()
	}

	function moveValuesToForm(event) {
		otherFields.hiddenField.value = event.target.parentElement.parentElement.id
		for (const field in inputFields) {
			inputFields[field].value = values[field]
			inputFields[field].disabled = true
		}
		buttonsForm.createBtn.disabled = true
		buttonsForm.deleteBtn.disabled = false
	}

	function deleteTask(event) {
		const form = event.target.parentElement.parentElement
		const currentForm = form.querySelector('#task-id').value
		const taskToRemove = otherFields['tasksSection'].querySelector(`#${currentForm}`)
		otherFields['tasksSection'].removeChild(taskToRemove)
		clearFields()
		buttonsForm.createBtn.disabled = false
		buttonsForm.deleteBtn.disabled = true
		currentPoints -= Number(values.points)
		otherFields.totalPoints.textContent = `Total Points ${currentPoints}pts`
		for (const field in inputFields) {
			inputFields[field].disabled = false
		}
	}

	function checkValidFields() {
		for (const field in inputFields) {
			if (inputFields[field].value.trim().length === 0) {
				return false
			}
		}
		return true
	}

	function clearFields() {
		for (const field in inputFields) {
			values[field] = inputFields[field].value
			inputFields[field].value = ''
		}
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