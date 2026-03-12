let prices = [30, 55, 100, 25, 90];

for (let i = 0; i < prices.length; i++) {
  let price = prices[i];

  if (price > 50) {
    price = price - price * 0.15;
  }

  console.log(price);
}
