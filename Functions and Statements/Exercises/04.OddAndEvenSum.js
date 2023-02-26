function oddAndEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;

    while (number > 0) {
        let lastNum = number % 10;
        number = Math.floor(number / 10);
        if (lastNum % 2 === 0) {
            evenSum += lastNum;
        } else {
            oddSum += lastNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}