function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textArea = document.querySelector('#inputs > textarea')
      const bestRestaurants = document.querySelector('#bestRestaurant')
      const workers = document.querySelector('#workers')

      let input = textArea.value
      input = input.replace(/[[\]]/g,'')
      console.log(input);

   }
}