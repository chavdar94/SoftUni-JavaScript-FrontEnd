window.addEventListener("load", solve);

function solve() {
	const inputFields = {
		title: document.querySelector('#task-title'),
		category: document.querySelector('#task-category'),
		content: document.querySelector('#task-content')
	}

	const otherInputs = {
		reviewList: document.querySelector('#review-list'),
		publishedList: document.querySelector('#published-list'),
		publishBtn: document.querySelector('#publish-btn')
	}

	const validFields = (data) => data.every(field => field.value.trim().length !== 0)
	const clearFields = (data) => data.forEach(field => field.value = '')

	otherInputs.publishBtn.addEventListener('click', publishTask)

	function publishTask(e) {
		e.preventDefault()
		const data = Object.values(inputFields)

		if (!validFields(data)) {
			return
		}

		createNewTask(data)
		clearFields(data)
	}

	function createNewTask(data) {
		[title, category, content] = data
		const li = createElement('li', null, otherInputs.reviewList, null, ['rpost'])
		const article = createElement('article', null, li)
		createElement('h4', title.value, article)
		createElement('p', `Category: ${category.value}`, article)
		createElement('p', `Content: ${content.value}`, article)

		const editBtn = createElement('button', 'Edit', li, null, ['action-btn', 'edit'])
		const postBtn = createElement('button', 'Post', li, null, ['action-btn', 'post'])

		editBtn.addEventListener('click', editTask)
		postBtn.addEventListener('click', postTask)
	}

	function editTask(e) {
		const currentElement = e.target.parentElement
		const children = Array.from(currentElement.querySelector('article').children)

		inputFields.title.value = children[0].textContent
		inputFields.category.value = children[1].textContent.split(': ')[1]
		inputFields.content.value = children[2].textContent.split(': ')[1]

		currentElement.remove()
	}

	function postTask(e) {
		const currentElement = e.target.parentElement
		const buttons = Array.from(currentElement.querySelectorAll('button'))
		buttons.forEach(btn => currentElement.removeChild(btn))

		otherInputs.publishedList.appendChild(currentElement)
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