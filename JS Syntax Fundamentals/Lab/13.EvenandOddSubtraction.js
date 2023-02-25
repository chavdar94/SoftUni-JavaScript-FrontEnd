function evenOddSubtraction(numbers) {
  let evens = 0;
  let odds = 0;

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);

    if (numbers[i] % 2 === 0) {
      evens += numbers[i];
    } else {
      odds += numbers[i];
    }
  }

  let result = evens - odds;
  console.log(result);
}

evenOddSubtraction([1, 2, 3, 4, 5, 6]);
evenOddSubtraction([3, 5, 7, 9]);
evenOddSubtraction([2, 4, 6, 8, 10]);
