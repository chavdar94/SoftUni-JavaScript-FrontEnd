let array = [1, 2, 3, 4, 5, 6];
let newArray = []
for (let i = 0; i <= 3; i++) {
  newArray.push(array.pop());
}

console.log(array);
