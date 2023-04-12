window.addEventListener('load', solve);

function solve() {

	const inputFields = {
		firstName: document.querySelector('#first-name'),
		lastName: document.querySelector('#last-name'),
		peopleCount: document.querySelector('#people-count'),
		fromDate: document.querySelector('#from-date'),
		daysCount: document.querySelector('#days-count')
	}

	const otherSelectors = {
		submitBtn: document.querySelector('#next-btn'),
		ticketInfo: document.querySelector('.ticket-info-list'),
		confirmTicket: document.querySelector('.confirm-ticket'),
		divMain: document.querySelector('#main'),
		body: document.querySelector('#body')
	}

	const fieldValues = {
		firstName: null,
		lastName: null,
		peopleCount: null,
		fromDate: null,
		daysCount: null
	}

	function validateFields() {
		for (const field in inputFields) {
			if (inputFields[field].value.trim().length === 0) {
				return false
			}
		}
		return true
	}
	function clearAndParseInputFields() {
		for (const field in inputFields) {
			fieldValues[field] = inputFields[field].value
			inputFields[field].value = ''
		}
	}

	function createTicket() {
		const { firstName, lastName, peopleCount, fromDate, daysCount } = fieldValues
		const li = createElement('li', null, otherSelectors.ticketInfo, null, ['ticket'])
		const article = createElement('article', null, li)
		createElement('h3', `Name: ${firstName} ${lastName}`, article)
		createElement('p', `From date: ${fromDate}`, article)
		createElement('p', `For ${daysCount} days`, article)
		createElement('p', `For ${peopleCount} people`, article)
		const editBtn = createElement('button', 'Edit', li, null, ['edit-btn'])
		const continueBtn = createElement('button', 'Continue', li, null, ['continue-btn'])

		editBtn.addEventListener('click', editTicket)
		continueBtn.addEventListener('click', continueTicket)
	}

	otherSelectors.submitBtn.addEventListener('click', addTicket)

	function addTicket(e) {
		e.preventDefault()
		if (!validateFields()) {
			return
		}
		otherSelectors.ticketInfo.textContent = ''
		otherSelectors.submitBtn.disabled = true
		clearAndParseInputFields()
		createTicket()
	}

	function editTicket(e) {
		const li = e.currentTarget.parentElement
		for (const field in inputFields) {
			inputFields[field].value = fieldValues[field]
		}
		li.parentElement.removeChild(li)
		otherSelectors.submitBtn.disabled = false
	}

	function continueTicket(e) {
		const li = e.currentTarget.parentElement
		const liButtons = Array.from(li.querySelectorAll('button'))
		liButtons.forEach((btn) => li.removeChild(btn))
		const confirmBtn = createElement('button', 'Confirm', li, null, ['confirm-btn'])
		const cancelBtn = createElement('button', 'Cancel', li, null, ['cancel-btn'])
		otherSelectors.confirmTicket.appendChild(li)

		confirmBtn.addEventListener('click', confirmTicket)
		cancelBtn.addEventListener('click', cancelTicker)
	}

	function confirmTicket(e) {
		otherSelectors.body.removeChild(otherSelectors.divMain)
		createElement('h1', 'Thank you, have a nice day!', otherSelectors.body, 'thank-you')
		const backBtn = createElement('button', 'Back', otherSelectors.body, 'back-btn')
		backBtn.addEventListener('click', () => {
			location.reload()
		})
	}

	function cancelTicker(e) {
		const li = e.currentTarget.parentElement
		otherSelectors.confirmTicket.removeChild(li)
		otherSelectors.submitBtn.disabled = false
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


    
    
