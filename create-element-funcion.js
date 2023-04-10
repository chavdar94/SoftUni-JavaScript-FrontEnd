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

// HTTP function
const apiRequest = async ({url = '', method = '', id = '', item = ''}) => {
        const options = {
            method: method
        }
        if (['PATCH', 'POST'].includes(method)) {
            options.headers = {'Content-Type': 'application/json'}
            options.body = JSON.stringify(item)
        }
        const data = await fetch(`${url}${id}`, options)
        return await data.json()
    }
