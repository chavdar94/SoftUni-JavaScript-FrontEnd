async function loadCommits() {
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const ul = document.getElementById('commits');
    const BASE_URL = 'https://api.github.com/repos';

    let usernameValue = username.value;
    let repoValue = repo.value;
    let code = null;

    ul.innerHTML = '';

    try {
        const response = await fetch(`${BASE_URL}/${usernameValue}/${repoValue}/commits`);
        code = response.status;
        const data = await response.json();
        for (const el of data) {
            const li = document.createElement('li');
            li.textContent = `${el.commit.author.name}: ${el.commit.message}`;
            ul.appendChild(li);
        }

        // data
        //     .forEach(({commit}) => {
        //         const li = document.createElement('li');
        //         li.textContent = `${commit.author.name}: ${commit.message}`;
        //         ul.appendChild(li);
        //     });

    } catch (error) {
        const li = document.createElement('li');
        li.textContent = `Error: ${code} (Not Found)`;
        ul.appendChild(li);
    }
}
