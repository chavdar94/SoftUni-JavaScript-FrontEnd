window.addEventListener('load', solve);

function solve() {
	const addButton = document.getElementById('add-btn');
	const genre = document.getElementById('genre');
	const name = document.getElementById('name');
	const author = document.getElementById('author');
	const date = document.getElementById('date');
	const fieldsArray = [genre, name, author, date];
	const songsContainer = document.querySelector('.all-hits-container');
	const savedSongs = document.querySelector('.saved-container');
	const likedCounter = document.querySelector('.likes p');

	const songInfo = {
		genre: null,
		name: null,
		author: null,
		date: null
	};


	addButton.addEventListener('click', (event) => {
		event.preventDefault();
		if (!validateFields()) {
			return;
		}
		const genreValue = genre.value;
		const nameValue = name.value;
		const authorValue = author.value;
		const dateValue = date.value;
		const div = createElement('div', null, songsContainer, null, ['hits-info']);
		createSong(div, genreValue, nameValue, authorValue, dateValue);

		songInfo.genre = genreValue;
		songInfo.name = nameValue;
		songInfo.author = authorValue;
		songInfo.date = dateValue;

		for (const field of fieldsArray) {
			field.value = '';
		}


	});


	function createSong(parent, genre, name, author, date) {
		createElement('img', null, parent, null, null, {src: './static/img/img.png'});
		createElement('h2', `Genre: ${genre}`, parent);
		createElement('h2', `Name: ${name}`, parent);
		createElement('h2', `Author: ${author}`, parent);
		createElement('h3', `Date: ${date}`, parent);
		const saveBtn = createElement('button', 'Save song', parent, null, ['save-btn']);
		saveBtn.addEventListener('click', saveSong);
		const likeBtn = createElement('button', 'Like song', parent, null, ['like-btn']);
		likeBtn.addEventListener('click', likeSong);
		const deleteBtn = createElement('button', 'Delete', parent, null, ['delete-btn']);
		deleteBtn.addEventListener('click', deleteSong);


	}

	function saveSong() {
		const div = this.parentElement

		const saveBtn = div.querySelector('.save-btn')
		const likeBtn = div.querySelector('.like-btn')
		div.removeChild(saveBtn)
		div.removeChild(likeBtn)

		songsContainer.removeChild(div)
		savedSongs.appendChild(div)

	}

	function likeSong() {
		const data = likedCounter.textContent.split(': ');
		const [text, count] = data
		likedCounter.textContent = `${text}: ${Number(count) + 1}`;
		this.disabled = true;
	}

	function deleteSong() {
		const div = this.parentElement;
		const divParent = div.parentElement;
		divParent.removeChild(div);
	}

	function validateFields() {
		for (const field of fieldsArray) {
			if (field.value.trim().length === 0) {
				return false;
			}
		}
		return true;
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