function wordsUppercase(words) {
  words = words.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase();
  }
  console.log(words.join(", "));
}

wordsUppercase("Hi, how are you?");
wordsUppercase("Functions in JS can be nested, i.e. hold other functions");
