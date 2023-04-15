window.addEventListener('load', solve);

function solve() {
    const inputFields = {
		productType: document.querySelector('#type-product'),
	    description: document.querySelector('#description'),
	    clientName: document.querySelector('#client-name'),
	    clientPhone: document.querySelector('#client-phone')
    }

	const otherFields = {
		sendBtn: document.querySelector('form button[type=submit]'),
		receivedOrders: document.querySelector('#received-orders'),
		completedOrders: document.querySelector('#completed-orders'),
		clearBtn: document.querySelector('.clear-btn')
	}


	otherFields.sendBtn.addEventListener('click', addRepairForm)
	otherFields.clearBtn.addEventListener('click', clearOrders)

	const validateFields = (dataFromInput) => dataFromInput.every((field) => field.value.trim().length !== 0)
	const clearFields = (dataFromInput) => dataFromInput.forEach((field) => field.value = '')

	function addRepairForm(e) {
		e.preventDefault()
		const data = Object.values(inputFields)
		if (!validateFields(data)) {
			return
		}

		createForm(data)
		clearFields(data)
	}

	function createForm(data) {
		[type, description, clientName, phone] = data
		const div = createElement('div', null, otherFields.receivedOrders, null, ['container'])
		createElement('h2', `Product type for repair: ${type.value}`, div)
		createElement('h3', `Client information: ${clientName.value}, ${phone.value}`, div)
		createElement('h4', `Description of the problem: ${description.value}`, div)
		const startBtn = createElement('button', 'Start repair', div, null, ['start-btn'])
		const finishBtn = createElement('button', 'Finish repair', div, null, ['finish-btn'], {disabled: 'true'})

		startBtn.addEventListener('click', () => {
			startBtn.disabled = true
			finishBtn.disabled = false
		})

		finishBtn.addEventListener('click', finishRepair)
	}

	function finishRepair(e) {
		const currentElement = e.target.parentElement
		const btns = Array.from(currentElement.querySelectorAll('button'))
		btns.forEach((btn) => currentElement.removeChild(btn))
		otherFields.completedOrders.appendChild(currentElement)
	}

	function clearOrders(e) {
		const currentElement = e.target.parentElement
		const divs = Array.from(currentElement.querySelectorAll('.container'))
		divs.forEach((div) => currentElement.removeChild(div))
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