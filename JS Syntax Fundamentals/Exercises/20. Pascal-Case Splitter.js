function pascalSplitter(string) {
  // console.log(string.split(/(?=[A-Z])/).join(", "));
  let wordsArr = [];
  let stringArr = Array.from(string);
  let word = "";

  for (const char of stringArr) {
    if (char === char.toUpperCase() && word.length > 0) {
      wordsArr.push(word);
      word = "";
      word += char;
    } else {
      word += char;
    }
  }
  wordsArr.push(word);
  console.log(wordsArr.join(", "));
}

pascalSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
