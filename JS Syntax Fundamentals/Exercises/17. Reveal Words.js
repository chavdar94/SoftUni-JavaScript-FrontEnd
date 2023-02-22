function revealWords(words, templates) {
  let wordsArr = words.split(", ");
  let tempArr = templates.split(" ");

  for (let word of wordsArr) {
    for (let i = 0; i < tempArr.length; i++) {
      if (
        tempArr[i].length === word.length &&
        tempArr[i].includes("*".repeat(word.length))
      ) {
        tempArr[i] = word;
      }
    }
  }

  console.log(tempArr.join(" "));
}

// revealwordss(
//   "great",
//   "softuni is ***** place for learning new programming languages"
// );

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
