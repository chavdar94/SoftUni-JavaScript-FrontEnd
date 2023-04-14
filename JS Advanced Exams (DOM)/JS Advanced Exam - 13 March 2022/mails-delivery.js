function solve() {
	const inputFields = {
		recipientName: document.querySelector('#recipientName'),
		title: document.querySelector('#title'),
		message: document.querySelector('#message')
	}

	const otherSelectors = {
		addBtn: document.querySelector('#add'),
		resetBtn: document.querySelector('#reset'),
		listMailsUl: document.querySelector('#list'),
		sentList: document.querySelector('.sent-list'),
		deleteList: document.querySelector('.delete-list'),
	}

	const validFields = (dataFromInput) => dataFromInput.every(field => field.value.trim().length !== 0)
	const clearFields = (dataFromInput) => (dataFromInput.forEach(field => field.value = ''))

	otherSelectors.addBtn.addEventListener('click', addMessageToList)
	otherSelectors.resetBtn.addEventListener('click', (e) => {
		e.preventDefault()
		clearFields(Object.values(inputFields))
	})


	function addMessageToList(e) {
		e.preventDefault()
		const data = Object.values(inputFields)
		if (!validFields(data)) {
			return
		}
		createMessage(data)
		clearFields(data)
	}

	function createMessage(data) {
		const [name, title, message] = data
		const li = createElement('li', null, otherSelectors.listMailsUl)
		createElement('h4', `Title: ${title.value}`, li)
		createElement('h4', `Recipient Name: ${name.value}`, li)
		createElement('span', message.value, li)
		const div = createElement('div', null, li, 'list-action')
		const sendBtn = createElement('button', 'Send', div, 'send', null, {type: 'submit'})
		const deleteBtn = createElement('button', 'Delete', div, 'delete', null, {type: 'submit'})

		sendBtn.addEventListener('click', sendMessage)
		deleteBtn.addEventListener('click', deleteMessage)

	}

	function sendMessage(e) {
		const currentTarget = e.target.parentElement.parentElement
		const children = Array.from(currentTarget.children)
		const to = children[1].textContent.split(': ')[1]
		const msgTitle = children[0].textContent.split(': ')[1]

		const li = createElement('li', null, otherSelectors.sentList)
		// might need to remove space after text
		createElement('span', `To: ${to} `, li)
		createElement('span', `Title: ${msgTitle}`, li)
		const div = createElement('div', null, li, null, ['btn'])
		const delBtn = createElement('button', 'Delete', div, null, ['delete'], {type: 'submit'})

		currentTarget.remove()
		delBtn.addEventListener('click', deleteMessage)
	}

	function deleteMessage(e) {
		const currentElement = e.target.parentElement.parentElement
		const children = Array.from(currentElement.children)
		const to = children[1].textContent.split(': ')[1]
		const msgTitle = children[0].textContent.split(': ')[1]

		const li = createElement('li', null, otherSelectors.deleteList)
		createElement('span', `To: ${to} `, li)
		createElement('span', `Title: ${msgTitle}`, li)

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