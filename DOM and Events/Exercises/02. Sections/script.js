function create(words) {
   const targetDiv = document.getElementById('content')

   for (const word of words) {
      const newDiv = document.createElement('div')
      const newP = document.createElement('p')
      newP.textContent += word
      newP.style.display = 'none'
      newDiv.addEventListener('click', () => {
         newP.style.display = 'block'
      })

      newDiv.appendChild(newP)
      targetDiv.appendChild(newDiv)
   }

}