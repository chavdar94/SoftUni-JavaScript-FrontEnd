function solve() {
	const inputFields = {
		author: document.querySelector('#creator'),
		title: document.querySelector('#title'),
		category: document.querySelector('#category'),
		content: document.querySelector('#content')
	}

	const otherFields = {
		createBtn: document.querySelector('.create'),
		postSection: document.querySelector('main > section'),
		archives: document.querySelector('.archive-section > ol')
	}

	const clearFields = (data) => data.forEach((field) => field.value = '')

	otherFields.createBtn.addEventListener('click', createPost)

	function createPost(e) {
		e.preventDefault()
		const data = Object.values(inputFields)

		addNewPost(data)
		clearFields(data)
	}

	function addNewPost(data) {
		[author, title, category, content] = data
		const article = createElement('article', null, otherFields.postSection)
		createElement('h1', title.value, article)
		createElement('p', `Category: <strong>${category.value}</strong>`, article, 1)
		createElement('p', `Creator: <strong>${author.value}</strong>`, article, 1)
		createElement('p', content.value, article)
		const div = createElement('div', null, article, null, null, ['buttons'])
		const deleteBtn = createElement('button', 'Delete', div, null, null, ['btn', 'delete'])
		const archiveBtn = createElement('button', 'Archive', div, null, null, ['btn', 'archive'])

		archiveBtn.addEventListener('click', archivePost)
		deleteBtn.addEventListener('click', (e) => {
			e.target.parentElement.parentElement.remove()

		})
	}

	function archivePost(e) {
		const currentElement = e.target.parentElement.parentElement
		const currentTitle = currentElement.querySelector('h1').textContent

		createElement('li', currentTitle, otherFields.archives)
		Array.from(otherFields.archives.children)
			.sort((a, b) => a.innerText > b.innerText ? 1 : -1)
			.forEach(node => otherFields.archives.appendChild(node));
		currentElement.remove()
	}


	function createElement(type, content, parentNode, innerHtml, id, classes, attrs) {
		const htmlElement = document.createElement(type);

		if (content && innerHtml) {
			htmlElement.innerHTML = content
		} else {
			if (content && type !== 'input') {
				htmlElement.textContent = content;
			}

			if (content && type === 'input') {
				htmlElement.value = content;
			}
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
