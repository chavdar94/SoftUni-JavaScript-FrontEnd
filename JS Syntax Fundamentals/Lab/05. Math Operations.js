function mathOperations(firstNumber, secondNumber, operator) {
    let result = `${firstNumber} ${operator} ${secondNumber}`
    console.log(eval(result))
}

mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')