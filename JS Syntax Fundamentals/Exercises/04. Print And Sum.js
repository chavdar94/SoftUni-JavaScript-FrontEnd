function printAndSum(start, end){
    let result = 0
    let numbers = []

    for(let i=start; i<=end; i++){
        result += i
        numbers.push(i)
    }

    console.log(...numbers)
    console.log(`Sum: ${result}`)
}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)