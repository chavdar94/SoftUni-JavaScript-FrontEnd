function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let totalExpenses = 0;

  let brokenHelmets = Math.floor(lostFights / 2);
  let brokenSwords = Math.floor(lostFights / 3);
  let brokenShields = Math.floor(lostFights / 6);
  let brokenArmors = Math.floor(brokenShields / 2);

  totalExpenses =
    brokenHelmets * helmetPrice +
    brokenSwords * swordPrice +
    brokenShields * shieldPrice +
    brokenArmors * armorPrice;
  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
