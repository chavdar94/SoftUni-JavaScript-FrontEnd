async function loadRepos() {
   const resultContainer = document.getElementById('res')
   const BASE_URL = 'https://api.github.com/users/testnakov/repos'


   const response = await fetch(BASE_URL)
   resultContainer.textContent = await response.text()
   // fetch(BASE_URL)
   //     .then((response) => response.text())
   //     .then((data) => resultContainer.textContent = data)

}

