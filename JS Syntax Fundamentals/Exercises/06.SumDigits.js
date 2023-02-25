function sumDigits(number) {
  number = Array.from(number.toString()).map(Number);
  
  let result = 0

  for (let i=0; i<number.length;i++){
    result += number[i]
  }

  console.log(result)
}


sumDigits(245678)