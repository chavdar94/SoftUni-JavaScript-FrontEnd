// async function loadRepos() {
//     const userInput = document.getElementById('username');
//     const reposUl = document.getElementById('repos');
//     const BASE_URL = 'https://api.github.com/users/';
//
//     let code = null
//
//     try {
//         let userInputValue = userInput.value;
//         const response = await fetch(`${BASE_URL}${userInputValue}/repos`);
//         code = response.status
//
//         const data = await response.json();
//         reposUl.innerHTML = '';
//
//         for (const element of data) {
//             const li = document.createElement('li');
//             const a = document.createElement('a');
//             a.setAttribute('href', `${BASE_URL}${userInputValue}`);
//             a.textContent = `${userInputValue}/${element.name}`;
//             li.appendChild(a);
//             reposUl.appendChild(li);
//             userInput.value = '';
//         }
//     } catch (err) {
//         const li = document.createElement('li')
//         li.textContent = `Error: ${code} (Not Found)`
//         reposUl.appendChild(li)
//     }
// }

function loadRepos() {
    const BASE_URL = 'https://api.github.com/users/';
    let username = document.getElementById('username').value;
    const ul = document.querySelector('#repos');
    // ul.removeChild(ul.firstElementChild);
    console.log(`${BASE_URL}${username}`);
    fetch(`${BASE_URL}${username}/repos`)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`${response.status} (Not Found)`)
        })
        .then((data) => {
            ul.innerHTML = '';
            data
                .forEach((el) => {
                    let li = document.createElement('li');
                    let aHref = document.createElement('a');
                    aHref.href = el.html_url;
                    aHref.textContent = el.full_name;
                    li.appendChild(aHref);
                    repos.appendChild(li);
                    document.getElementById('username').value = '';
                });
        })
        .catch((error) => {
            ul.innerHTML = ''
            const li = document.createElement('li')
            li.textContent = error
            ul.appendChild(li)
        });
}