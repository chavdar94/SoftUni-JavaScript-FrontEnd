function sum(numberOne, numberTwo, numberThree) {
    let addedNumbers = numberOne + numberTwo;

    function subtract(addedNumbers, numberThree) {
        return addedNumbers - numberThree;
    }

    let result = subtract(addedNumbers, numberThree);
    console.log(result);
}