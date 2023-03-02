function simpleCalculator(firstNumber, secondNumber, operator) {
    switch (operator) {
        case 'multiply':
            console.log(firstNumber * secondNumber)
            break
        case 'divide':
            console.log(firstNumber / secondNumber)
            break
        case 'add':
            console.log(firstNumber + secondNumber)
            break
        case 'subtract':
            console.log(firstNumber - secondNumber)
            break
    }
}

simpleCalculator(5,
    5,
    'multiply')