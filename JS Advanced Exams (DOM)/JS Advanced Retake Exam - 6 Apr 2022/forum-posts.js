window.addEventListener("load", solve);

function solve() {
	const inputFields = {
		postTitle: document.querySelector('#post-title'),
		postCategory: document.querySelector('#post-category'),
		postContent: document.querySelector('#post-content')
	}

	const otherSelectors = {
		publishBtn: document.querySelector('#publish-btn'),
		reviewList: document.querySelector('#review-list'),
		clearBtn: document.querySelector('#clear-btn'),
		publishedList: document.querySelector('#published-list'),
	}

	const validateInputs = (dataFromInput) => dataFromInput.every(field => field.value.trim().length !== 0)
	const clearInputFields = (dataFromInput) => dataFromInput.forEach(field => field.value = '')
	otherSelectors.publishBtn.addEventListener('click', addPostToReview)
	otherSelectors.clearBtn.addEventListener('click', () => otherSelectors.publishedList.innerHTML = '')


	function addPostToReview(e) {
		e.preventDefault()
		const data = Object.values(inputFields)

		if (!validateInputs(data)) {
			return
		}
		createNewPost(data)
		clearInputFields(data)
	}

	function createNewPost(data) {
		const [title, category, content] = data
		const li = createElement('li', null, otherSelectors.reviewList, null, ['rpost'])
		const article = createElement('article', null, li)
		createElement('h4', title.value, article)
		createElement('p', `Category: ${category.value}`, article)
		createElement('p', `Content: ${content.value}`, article)
		const editBtn = createElement('button', 'Edit', li, null, ['action-btn', 'edit'])
		const approveBtn = createElement('button', 'Approve', li, null, ['action-btn', 'approve'])

		editBtn.addEventListener('click', editPost)
		approveBtn.addEventListener('click', approvePost)
	}

	function editPost(e) {
		const currentElement = e.target.parentElement
		const children = Array.from(currentElement.querySelector('article').children)
		inputFields.postTitle.value = children[0].textContent
		inputFields.postCategory.value = children[1].textContent.split(': ')[1]
		inputFields.postContent.value = children[2].textContent.split(': ')[1]

		currentElement.remove()
	}

	function approvePost(e) {
		const currentElement = e.target.parentElement
		const buttons = Array.from(currentElement.querySelectorAll('button'))
		buttons.forEach(btn => currentElement.removeChild(btn))
		otherSelectors.publishedList.appendChild(currentElement)
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
