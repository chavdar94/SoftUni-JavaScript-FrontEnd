function attachEvents() {
    const loadButton = document.getElementById('load-button')
    const addButton = document.getElementById('add-button')
    const nameInput = document.getElementById('title')
    const todoList = document.getElementById('todo-list')

    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    loadButton.addEventListener('click', loadAllHandler)
    async function loadAllHandler(e) {
        e.preventDefault()
        todoList.textContent = ''
        const response = await fetch(BASE_URL)
        const data = await response.json()
        const itemValues = Object.values(data)
        for (const key in itemValues) {
            const { name, _id } = itemValues[key]

            const li = document.createElement('li')
            li.id = _id

            const span = document.createElement('span')
            span.textContent = name

            const remove = document.createElement('button')
            remove.textContent = 'Remove'

            const edit = document.createElement('button')
            edit.textContent = 'Edit'

            li.appendChild(span)
            li.appendChild(remove)
            li.appendChild(edit)

            todoList.appendChild(li)

            remove.addEventListener('click', async (e) => {
                const id = e.target.parentElement.id
                const httpHeaders = {
                    method: 'DELETE'
                }
                const response = await fetch(`${BASE_URL}${id}`, httpHeaders)
                await loadAllHandler(e)
            })

            edit.addEventListener('click', async (e) => {
                const event = e.target
                const eventParent = event.parentElement

                if (event.textContent === 'Edit') {
                    const span = eventParent.querySelector('span')
                    const item = span.textContent

                    const input = document.createElement('input')
                    input.value = item
                    eventParent.replaceChild(input, span)
                    event.textContent = 'Submit'
                } else {
                    const input = eventParent.querySelector('input')
                    const span = document.createElement('span')
                    span.value = input.value
                    eventParent.replaceChild(span, input)

                    const httpHeaders = {
                        method: 'PATCH',
                        body: JSON.stringify({
                            name: span.value
                        })
                    }

                    const response = await fetch(`${BASE_URL}${eventParent.id}`, httpHeaders)
                    await loadAllHandler(e)

                    event.textContent = 'Edit'
                }
            })
        }
    }

    addButton.addEventListener('click', addItemHandler)
    async function addItemHandler(e) {
        e.preventDefault()
        const name = nameInput.value
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({name})
        }

        const response = await fetch(BASE_URL, httpHeaders)
        const data = await loadAllHandler(e)
        nameInput.value = ''
    }

}

attachEvents();
