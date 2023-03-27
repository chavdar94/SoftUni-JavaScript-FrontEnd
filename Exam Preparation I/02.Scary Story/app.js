window.addEventListener("load", solve);

function solve() {
    const [firstName, lastName, age, storyTitle] = Array.from(document.querySelectorAll('.inner-wrap input'));
    const genre = document.querySelector('.inner-wrap label select');
    const story = document.querySelector('.inner-wrap #story');
    const previewList = document.getElementById('preview-list');
    const publishBtn = document.querySelector('.button-section input');
    const userInfo = [firstName, lastName, age, storyTitle, genre, story];

    publishBtn.addEventListener('click', collectInfoHandler);

    function collectInfoHandler() {

        if (checkValidInformation()) {

            // taking values
            const firstNameValue = firstName.value;
            const lastNameValue = lastName.value;
            const ageValue = age.value;
            const storyTitleValue = storyTitle.value;
            const genreValue = genre.value;
            const storyValue = story.value;

            // DOM manipulations
            const li = createElement('li', '', previewList, '', ['story-info']);
            const article = createElement('article', '', li);
            const h4 = createElement('h4', `Name: ${firstNameValue} ${lastNameValue}`, article);
            const ageP = createElement('p', `Age: ${ageValue}`, article);
            const titleP = createElement('p', `Title: ${storyTitleValue}`, article);
            const genreP = createElement('p', `Genre: ${genreValue}`, article);
            const storyP = createElement('p', storyValue, article);
            const saveBtn = createElement('button', 'Save Story', li, '', ['save-btn']);
            const editBtn = createElement('button', 'Edit Story', li, '', ['edit-btn']);
            const deleteBtn = createElement('button', 'Delete Story', li, '', ['delete-btn']);

            // clearing the fields
            publishBtn.disabled = true;
            firstName.value = '';
            lastName.value = '';
            age.value = '';
            storyTitle.value = '';
            story.value = '';

            // edit button logic
            editBtn.addEventListener('click', () => {
                publishBtn.disabled = false;
                firstName.value = firstNameValue;
                lastName.value = lastNameValue;
                age.value = ageValue;
                storyTitle.value = storyTitleValue;
                story.value = storyValue;
                const li = document.querySelector('.story-info')
                previewList.removeChild(li)
            });

            //save button logic
            saveBtn.addEventListener('click', () => {
                const main = document.querySelector('#main');
                const body = document.querySelector('.body')

                body.removeChild(main)

                const div = createElement('div', '', body, 'main')
                const message = 'Your scary story is saved!';
                const h1 = createElement('h1', message, div);

            });

            //delete button logic
            deleteBtn.addEventListener('click', () => {
                const li = document.querySelector('.story-info')
                previewList.removeChild(li)
                publishBtn.disabled = false;
            });
        }
    }

    function checkValidInformation() {
        for (const item of userInfo) {
            if (item.value.trim().length === 0) {
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
