function findSubstring(searchedWord, text) {
  let condition = false;

  for (let word of text.split(" ")) {
    if (word.toLowerCase() === searchedWord.toLowerCase()) {
      console.log(searchedWord);
      condition = true;
      return;
    }
  }

  if (condition === false) {
    console.log(`${searchedWord} not found!`);
  }
}

// findSubstring("javascript", "JavaScript is the best programming language");
findSubstring("python", "JavaScript is the best programming language");
