function focused() {
    const inputArea = Array.from(document.getElementsByTagName('input'));

    for (const input of inputArea) {
        input.addEventListener('focus', focusHandler)
        input.addEventListener('blur', blurHandler)
    }

    function focusHandler(e) {
        e.currentTarget.parentElement.className = 'focused'
    }

    function blurHandler(e) {
        const currenInput = e.target
        const parentDiv = currenInput.parentElement

        if (parentDiv.classList.contains('focused')){
            parentDiv.classList.remove('focused')
        }
    }

}