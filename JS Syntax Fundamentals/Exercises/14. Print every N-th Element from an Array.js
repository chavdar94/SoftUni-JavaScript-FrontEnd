function nthElement(array, step) {
  let newArray = [];
  for (let i = 0; i < array.length; i += step) {
    newArray.push(array[i]);
  }
  return newArray;
}

// nthElement(["5", "20", "31", "4", "20"], 2);
// nthElement(["dsa", "asd", "test", "tset"], 2);
console.log(nthElement(["1", "2", "3", "4", "5"], 6));
