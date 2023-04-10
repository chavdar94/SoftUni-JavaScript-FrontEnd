function attachEvents() {
	const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
	const newButtons = {
		'ToDo': 'Move to In Progress',
		'In Progress': 'Move to Code Review',
		'Code Review': 'Move to Done',
		'Done': 'Close'
	}

	const columns = {
		'ToDo': document.querySelector('#todo-section .task-list'),
		'In Progress': document.querySelector('#in-progress-section .task-list'),
		'Code Review': document.querySelector('#code-review-section .task-list'),
		'Done': document.querySelector('#done-section .task-list')
	}
	const loadBtn = document.querySelector('#load-board-btn')
	const addBtn = document.querySelector('#create-task-btn')

	loadBtn.addEventListener('click', loadAllTasks)
	addBtn.addEventListener('click', addTask)

	async function loadAllTasks(event) {
		const response = await fetch(BASE_URL)
		const data = await response.json()

		Object.values(columns).forEach(x => x.textContent = '')

		for (const key in data) {
			const status = data[key].status
			const newChild = newTask(data[key])
			columns[status].appendChild(newChild)
		}

	}

	async function addTask() {
		const titleField = document.querySelector('#title')
		const descriptionField = document.querySelector('#description')

		const titleValue = titleField.value
		const descValue = descriptionField.value

		titleField.value = ''
		descriptionField.value = ''

		await apiRequest({
			url: BASE_URL,
			method: 'POST',
			item: {
				title: titleValue,
				description: descValue,
				status: 'ToDo',
			}
		})

		await loadAllTasks()
	}

	async function moveToNextColumn(event) {
		const parent = event.target.parentElement
		const parentId = parent.id
		const newStatus = parent.querySelector('button').textContent

		if (newStatus === 'Move to In Progress') {
			await apiRequest({ url: BASE_URL, method: 'PATCH', id: parentId, item: { status: 'In Progress' } })
		} else if (newStatus === 'Move to Code Review') {
			await apiRequest({ url: BASE_URL, method: 'PATCH', id: parentId, item: { status: 'Code Review' } })
		} else if (newStatus === 'Move to Done') {
			await apiRequest({ url: BASE_URL, method: 'PATCH', id: parentId, item: { status: 'Done' } })
		} else if (newStatus === 'Close') {
			await apiRequest({ url: BASE_URL, method: 'DELETE', id: parentId })
		}
		await loadAllTasks()

	}

	function newTask(data) {
		[title, description, status, _id] = Object.values(data)
		const li = createElement('li', null, null, _id, ['task'])
		createElement('h3', title, li)
		createElement('p', description, li)
		const taskBtn = createElement('button', newButtons[status], li)
		taskBtn.addEventListener('click', moveToNextColumn)
		return li
	}

	async function apiRequest({ url = '', method = '', id = '', item = '' }) {
		const options = {
			method: method
		}

		if (['PATCH', 'POST'].includes(method)) {
			options.headers = { 'Content-Type': 'application/json' }
			options.body = JSON.stringify(item)
		}

		const data = await fetch(`${url}${id}`, options)
		return await data.json()
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

attachEvents();
