function solve(string) {
  string = string.split(" ");
  let keyWords = [];

  for (let word of string) {
    if (/^#[a-zA-Z]+$/.test(word)) {
      keyWords.push(word);
    }
  }

  for (let word of keyWords) {
    console.log(word.substring(1));
  }
}

solve("Nowadays everyone uses # to tag a #spec#ial word in #socialMedia");
