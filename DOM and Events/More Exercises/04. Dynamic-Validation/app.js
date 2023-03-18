function validate() {
    const input = document.getElementById('email')

    input.addEventListener('change', validateHandler)

    function validateHandler(event) {
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/
        if (!regex.test(input.value)){
            input.classList.add('error')
        } else {
            input.classList.remove('error')
            input.value = ''
        }
    }
}
