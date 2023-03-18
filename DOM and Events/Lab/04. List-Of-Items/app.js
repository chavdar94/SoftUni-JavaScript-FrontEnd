function addItem() {
    const items = document.getElementById('items')
    const itemAdd = document.getElementById('newItemText')

    const newElement = document.createElement('li')
    newElement.textContent = itemAdd.value
    items.appendChild(newElement)
    itemAdd.value = ''
}