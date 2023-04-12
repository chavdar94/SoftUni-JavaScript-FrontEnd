window.addEventListener('load', solve);

function solve() {
    const inputFields = {
        firstName: document.querySelector('#first-name'),
        lastName: document.querySelector('#last-name'),
        checkIn: document.querySelector('#date-in'),
        checkOut: document.querySelector('#date-out'),
        peopleCount: document.querySelector('#people-count'),
    }

    const otherSelectors = {
        nextBtn: document.querySelector('#next-btn'),
        reservationList: document.querySelector('.info-list'),
        confirmList: document.querySelector('.confirm-list'),
        verificationElement: document.querySelector('#verification')
    }

    const inputValues = {
        firstName: null,
        lastName: null,
        checkIn: null,
        checkOut: null,
        peopleCount: null
    }

    otherSelectors.nextBtn.addEventListener('click', createReservationHandler)

    const checkCorrectInputs = (dataFromInput) => dataFromInput.every(field => field.value.trim().length !== 0)
    function clearAndParseValues() {
        for (const field in inputFields) {
            inputValues[field] = inputFields[field].value
            inputFields[field].value = ''
        }
    }

    function createReservationItem() {
        const { firstName, lastName, checkIn, checkOut, peopleCount } = inputValues
        const li = createElement('li', null, otherSelectors.reservationList, null, ['reservation-content'])
        const article = createElement('article', null, li)
        createElement('h3', `Name: ${firstName} ${lastName}`, article)
        createElement('p', `From date: ${checkIn}`, article)
        createElement('p', `To date: ${checkOut}`, article)
        createElement('p', `For ${peopleCount} people`, article)
        const editBtn = createElement('button', 'Edit', li, null, ['edit-btn'])
        const continueBtn = createElement('button', 'Continue', li, null, ['continue-btn'])

        editBtn.addEventListener('click', editReservation)
        continueBtn.addEventListener('click', continueReservation)
    }


    function createReservationHandler(e) {
        e.preventDefault()
        const data = Object.values(inputFields)

        if (!checkCorrectInputs(data) || new Date(inputFields.checkIn.value) >= new Date(inputFields.checkOut.value)) {
            return
        }

        clearAndParseValues()
        otherSelectors.nextBtn.disabled = true
        createReservationItem()


    }

    function editReservation(e) {
        const li = e.currentTarget.parentElement
        for (const field in inputFields) {
            inputFields[field].value = inputValues[field]
        }
        otherSelectors.reservationList.removeChild(li)
        otherSelectors.nextBtn.disabled = false
    }

    function continueReservation(e) {
        const li = e.currentTarget.parentElement
        const buttons = Array.from(li.querySelectorAll('button'))
        buttons.forEach(btn => li.removeChild(btn))

        const confirmBtn = createElement('button', 'Confirm', li, null, ['confirm-btn'])
        const cancelBtn = createElement('button', 'Cancel', li, null, ['cancel-btn'])

        otherSelectors.confirmList.appendChild(li)

        confirmBtn.addEventListener('click', confirmReservation)
        cancelBtn.addEventListener('click', cancelReservation)
    }

    function confirmReservation(e) {
        const li = e.currentTarget.parentElement
        li.parentElement.removeChild(li)
        otherSelectors.nextBtn.disabled = false
        otherSelectors.verificationElement.classList.add('reservation-confirmed')
        otherSelectors.verificationElement.textContent = 'Confirmed.'
    }

    function cancelReservation(e) {
        const li = e.currentTarget.parentElement
        li.parentElement.removeChild(li)
        otherSelectors.nextBtn.disabled = false
        otherSelectors.verificationElement.classList.add('reservation-cancelled')
        otherSelectors.verificationElement.textContent = 'Cancelled.'
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
