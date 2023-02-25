function sortNumbers(array) {
  array.sort((a, b) => a - b);
  let sortedArray = [];

  while (array.length > 0) {
    sortedArray.push(array.shift());
    sortedArray.push(array.pop());
  }

  return sortedArray;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
