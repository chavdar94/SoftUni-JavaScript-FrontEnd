function solve(word, text) {
  text = text.toLowerCase();
  if (text.includes(word.toLowerCase())) {
    console.log(word);
    return;
  } else {
    console.log(`${word} not found!`);
  }
}
