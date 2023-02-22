function pascalSplitter(string) {
  console.log(string.split(/(?=[A-Z])/).join(", "));
}

pascalSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
