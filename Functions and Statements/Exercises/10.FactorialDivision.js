function factorial(...nums) {
    let result = [];

    for (const num of nums) {
        let sum = num;

        if (num === 1 || num === 0) {
            result.push(num);
            continue;
        } else {
            for (let i = num - 1; i >= 1; i--) {
                sum *= i;
            }
        }
        result.push(sum)
    }
    console.log((result[0] / result[1]).toFixed(2));
}

factorial(6, 2);