function solve() {
	const BASE_URL = 'http://localhost:3030/jsonstore/grocery/'
	const productName = document.querySelector('#product')
	const countField = document.querySelector('#count')
	const priceField = document.querySelector('#price')
	const addBtn = document.querySelector('#add-product')
	const updateBtn = document.querySelector('#update-product')
	const loadBtn = document.querySelector('#load-product')
	let updateId = null

	async function addProduct(event) {
		event.preventDefault()
		const product = productName.value
		const count = countField.value
		const price = priceField.value

		const httpHeaders = {
			method: 'POST',
			body: JSON.stringify({product, count, price})
		}

		await fetch(BASE_URL, httpHeaders)
		await loadProducts(event)

		productName.value = ''
		countField.value = ''
		priceField.value = ''

	}

	async function loadProducts(event) {
		event.preventDefault()
		const tbody = document.querySelector('#tbody')
		tbody.textContent = ''
		const response = await fetch(BASE_URL)
		const data = await response.json()

		const values = Object.values(data)

		values.forEach(x => {
			const {product, count, price, _id} = x
			const tr = createElement('tr', null, tbody)
			createElement('td', product, tr, null, ['name'])
			createElement('td', count, tr, null, ['count-product'])
			createElement('td', price, tr, null, ['product-price'])
			const btnTd = createElement('td', null, tr, null, ['btn'])
			const updateBtn = createElement('button', 'Update', btnTd, _id, ['update'])
			const deleteBtn = createElement('button', 'Delete', btnTd, _id, ['delete'])

			deleteBtn.addEventListener('click', deleteProduct)
			updateBtn.addEventListener('click', updateProduct)

		})


	}

	async function updateProduct(event) {
		const e = event.target
		updateId = e.id

		productName.value = e.parentElement.parentElement.querySelector('.name').textContent
		countField.value = e.parentElement.parentElement.querySelector('.count-product').textContent
		priceField.value = e.parentElement.parentElement.querySelector('.product-price').textContent

		updateBtn.disabled = false
		addBtn.disabled = true

	}

	async function deleteProduct(event) {
		const id = this.id
		const httpHeaders = {
			method: 'DELETE'
		}

		await fetch(`${BASE_URL}${id}`, httpHeaders)
		await loadProducts(event)
	}

	async function updateProductHandler(event) {
		const product = productName.value
		const count = countField.value
		const price = priceField.value

		const httpHeaders = {
			method: 'PATCH',
			body: JSON.stringify({product, count, price})
		}

		await fetch(`${BASE_URL}${updateId}`, httpHeaders)
		await loadProducts(event)

		productName.value = ''
		countField.value = ''
		priceField.value = ''
		addBtn.disabled = false
		updateBtn.disabled = true
	}

	addBtn.addEventListener('click', addProduct)
	updateBtn.addEventListener('click', updateProductHandler)
	loadBtn.addEventListener('click', loadProducts)

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