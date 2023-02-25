function findSubstring(searchedWord, text) {
  for (let word of text.split(" ")) {
    if (word.toLowerCase() === searchedWord.toLowerCase()) {
      console.log(searchedWord);
      return;
    }
  }
  console.log(`${searchedWord} not found!`);
}

// findSubstring("javascript", "JavaScript is the best programming language");
findSubstring("python", "JavaScript is the best programming language");
