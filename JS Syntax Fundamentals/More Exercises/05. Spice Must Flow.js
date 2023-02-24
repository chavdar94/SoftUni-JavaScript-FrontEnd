function spiceFlow(startingYield) {
  let days = 0;
  let spices = 0;

  while (startingYield >= 100) {
    spices += startingYield - 26;
    startingYield -= 10;
    days++;
  }

  if (spices >= 10) {
    spices -= 26;
  } else {
    spices = 0;
  }
  console.log(days);
  console.log(spices);
}

spiceFlow(111);
