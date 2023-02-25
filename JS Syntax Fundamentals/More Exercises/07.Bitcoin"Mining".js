function bitcoinMining(minedGold) {
  let totalBitCoins = 0;
  let firstBitCoinBought = 0;
  let totalMoney = 0;
  let days = 0;

  const bitCoinPrice = 11949.16;
  const priceGoldPerGram = 67.51;

  for (let i = 0; i < minedGold.length; i++) {
    days++;
    if (days % 3 === 0) {
      minedGold[i] *= 0.7;
    }
    let goldPrice = minedGold[i] * priceGoldPerGram;
    totalMoney += goldPrice;

    while (totalMoney >= bitCoinPrice) {
      if (firstBitCoinBought === 0) {
        firstBitCoinBought = days;
      }
      totalBitCoins++;
      totalMoney -= bitCoinPrice;
    }
  }

  console.log(`Bought bitcoins: ${totalBitCoins}`);
  if (firstBitCoinBought > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitCoinBought}`);
  }

  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);
