function substringSliced(word, start, end) {
  let newWord = "";

  let result = word.substring(start, start + end);
  console.log(result);
}

substringSliced("ASentence", 1, 8);
substringSliced("SkipWord", 4, 7);
substringSliced("123456", 1, 4);
