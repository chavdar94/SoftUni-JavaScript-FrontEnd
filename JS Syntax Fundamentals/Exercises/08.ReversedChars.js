function reversedChars(firstChar, secondChar, thirdChar) {
  let string = thirdChar + secondChar + firstChar;
  console.log(string.split("").join(" "));
}

reversedChars("A", "B", "C");
reversedChars("1", "L", "&");
