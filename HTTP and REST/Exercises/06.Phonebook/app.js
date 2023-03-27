function attachEvents() {
    const loadBtn = document.getElementById('btnLoad')
    const phonebookUl = document.getElementById('phonebook')
    const createBtn = document.getElementById('btnCreate')
    const personInput = document.getElementById('person')
    const phoneInput = document.getElementById('phone')
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook'

    loadBtn.addEventListener('click', loadPhonebook)
    createBtn.addEventListener('click', addPhoneNumber)
    let phonebookData = {}

    async function loadPhonebook () {
        try {
            const response = await fetch(BASE_URL)
            const data = await response.json()
            phonebookData = data
            phonebookUl.innerHTML = ''
            for (const key in data) {
                const person = data[key]['person']
                const phoneNumber = data[key]['phone']
                const li = document.createElement('li')
                const button = document.createElement('button')
                button.textContent = 'Delete'
                button.id = data[key]['_id']
                button.addEventListener('click', deleteNumber)
                li.textContent = `${person}: ${phoneNumber}`
                li.appendChild(button)
                phonebookUl.appendChild(li)
            }
        }catch (e){
        }
    }

    async function deleteNumber(e) {
        const id = this.id
        const httpHeaders = {
            method: 'DELETE'
        }

        const response = await fetch(`${BASE_URL}/${id}`, httpHeaders)
        const data = await loadPhonebook()

    }

    async function addPhoneNumber() {
        const person = personInput.value
        const phone = phoneInput.value

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                person,
                phone
            })
        }

        const response = await fetch(BASE_URL, httpHeaders)
        const data = await loadPhonebook()

        personInput.value = ''
        phoneInput.value = ''
    }
}

attachEvents();