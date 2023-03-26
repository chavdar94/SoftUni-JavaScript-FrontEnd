async function loadRepos() {
    const userInput = document.getElementById('username');
    const reposUl = document.getElementById('repos');
    const BASE_URL = 'https://api.github.com/users/';

    let code = null

    try {
        let userInputValue = userInput.value;
        const response = await fetch(`${BASE_URL}${userInputValue}/repos`);
        code = response.status

        const data = await response.json();
        reposUl.innerHTML = '';

        for (const element of data) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', BASE_URL + userInput);
            a.textContent = `${userInputValue}/${element.name}`;
            li.appendChild(a);
            reposUl.appendChild(li);
            userInput.value = '';
        }
    } catch (err) {
        const li = document.createElement('li')
        li.textContent = `Error: ${code} (Not Found)`
        reposUl.appendChild(li)
    }
}