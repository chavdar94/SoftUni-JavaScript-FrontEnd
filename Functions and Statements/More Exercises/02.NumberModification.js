function numberModification(number) {
    let numArray = Array.from(String(number));
    let numAvg = 0

    while (true){
        let sum = 0

        for (let num of numArray) {
            num = Number(num)
            sum += num
        }

        let currentAvg = sum / numArray.length
        if (currentAvg < 5){
            numArray.push('9')
        } else {
            numAvg = currentAvg
            break
        }
    }
    console.log(numArray.join(''));
}

numberModification(101);