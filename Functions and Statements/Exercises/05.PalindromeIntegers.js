function palindrome(numbers) {
    function validatePalindrome(number) {
        let numberAsStr = number.toString();
        let reversedNum = [];

        for (let i = numberAsStr.length - 1; i >= 0; i--) {
            reversedNum.push(numberAsStr[i]);
        }

        reversedNum = Number(reversedNum.join(''));

        return number === reversedNum;
    }

    for (let number of numbers) {
        if (validatePalindrome(number)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}