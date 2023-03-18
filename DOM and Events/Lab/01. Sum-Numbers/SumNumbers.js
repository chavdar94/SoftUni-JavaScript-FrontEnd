function calc() {
    const firstNum = Number(document.getElementById('num1').value)
    const secondNum = Number(document.getElementById('num2').value)
    const resultField = document.getElementById('sum')
    const result = firstNum + secondNum
    console.log(resultField);

    resultField.value += result
}
