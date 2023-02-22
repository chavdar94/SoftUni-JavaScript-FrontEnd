function sortNames(names) {
  names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  let index = 1;
  for (const name of names) {
    console.log(`${index}.${name}`);
    index++;
  }
}

sortNames(["John", "Bob", "Christina", "Ema"]);
