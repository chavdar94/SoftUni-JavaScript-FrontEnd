function signCheck(...numbers) {
    let negatives = 0

    for (const number of numbers) {
        if (number < 0) {
            negatives += 1
        }
    }
    if (negatives % 2 !== 0) {
        console.log('Negative')
    } else {
        console.log('Positive')
    }
}

signCheck(5,
    12,
    -15)