function fruit(fruit, weight, price) {
  let weightKg = weight / 1000;
  let fruitPrice = weightKg * price;

  console.log(
    `I need ${"$" + fruitPrice.toFixed(2)} to buy ${weightKg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);
