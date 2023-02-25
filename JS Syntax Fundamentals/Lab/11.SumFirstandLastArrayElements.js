function sumFirstLast(numbers) {
    let arrLength = numbers.length
    let firstNumber = numbers[0]
    let lastNumber = numbers[arrLength-1]
    let result = firstNumber + lastNumber
    console.log(result)
}

sumFirstLast([20, 30, 40])
sumFirstLast([10, 17, 22, 33])
sumFirstLast([11, 58, 69])