function smallestNumber(...numbers) {
    // console.log(Math.min(...numbers));
    let minNumber = Number.MAX_SAFE_INTEGER;

    for (let number of numbers) {
        if (number < minNumber) {
            minNumber = number;
        }
    }
    console.log(minNumber);
}