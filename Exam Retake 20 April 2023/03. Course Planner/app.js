function solve() {
	const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
	const inputFields = {
		name: document.querySelector('#course-name'),
		type: document.querySelector('#course-type'),
		description: document.querySelector('#description'),
		teacherName: document.querySelector('#teacher-name')
	}

	const otherFields = {
		addBtn: document.querySelector('#add-course'),
		editBtn: document.querySelector('#edit-course'),
		courseList: document.querySelector('#list'),
		loadCourses: document.querySelector('#load-course')
	}

	let id = null

	otherFields.loadCourses.addEventListener('click', loadCoursesHandler)
	otherFields.addBtn.addEventListener('click', addNewCourse)
	otherFields.editBtn.addEventListener('click', editCourse)

	async function loadCoursesHandler() {
		const response = await fetch(BASE_URL)
		const data = await response.json()

		Object.values(inputFields).forEach(x => x.value = '')
		otherFields.courseList.innerHTML = ''

		for (const key in data) {
			newTask(data[key])
		}
	}

	function newTask(data) {
		[name, type, description, tname, _id] = Object.values(data)
		const div = createElement('div', null, otherFields.courseList, _id, ['container'])
		createElement('h2', name, div)
		createElement('h3', tname, div)
		createElement('h3', type, div)
		createElement('h4', description, div)

		const editCourseBtn = createElement('button', 'Edit Course', div, null, ['edit-btn'])
		const finishCourseBtn = createElement('button', 'Finish Course', div, null, ['finish-btn'])

		editCourseBtn.addEventListener('click', editCurrentCourse)
		finishCourseBtn.addEventListener('click', finishCourse)
	}

	async function addNewCourse() {

		await apiRequest({
			url: BASE_URL,
			method: 'POST',
			item: {
				title: inputFields.name.value,
				type: inputFields.type.value,
				description: inputFields.description.value,
				teacher: inputFields.teacherName.value
			}
		})

		await Object.values(inputFields).forEach(x => x.value = '')

		await loadCoursesHandler()

	}

	async function editCurrentCourse(e) {
		const currentElement = e.target.parentElement
		const children = Array.from(currentElement.children)
		id = currentElement.id

		inputFields.name.value = children[0].textContent
		inputFields.type.value = children[2].textContent
		inputFields.description.value = children[3].textContent
		inputFields.teacherName.value = children[1].textContent

		currentElement.remove()
		otherFields.addBtn.disabled = true
		otherFields.editBtn.disabled = false
	}

	async function editCourse(e) {
		e.preventDefault()

		await apiRequest({
			url: BASE_URL,
			method: 'PUT',
			id: id,
			item: {
				title: inputFields.name.value,
				type: inputFields.type.value,
				description: inputFields.description.value,
				teacher: inputFields.teacherName.value,
				_id: id
			}
		})

		Object.values(inputFields).forEach(x => x.value = '')

		await loadCoursesHandler()

		otherFields.addBtn.disabled = false
		otherFields.editBtn.disabled = true
	}

	async function finishCourse(e) {
		id = e.target.parentElement.id

		await apiRequest({
			url: `${BASE_URL}${id}`,
			method: 'DELETE',
		})
		await loadCoursesHandler()
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


	const apiRequest = async ({url = '', method = '', id = '', item = ''}) => {
		const options = {
			method: method
		}
		if (['PATCH', 'POST', 'PUT'].includes(method)) {
			options.headers = {'Content-Type': 'application/json'}
			options.body = JSON.stringify(item)
		}
		const data = await fetch(`${url}${id}`, options)
		return await data.json()
	}

}

solve()