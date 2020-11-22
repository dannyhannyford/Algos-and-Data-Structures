function minNumberOfCoinsForChange(n, denoms) {
  // create array setting max amount of coins for every slot
  const minNumCoins = new Array(n + 1).fill(n + 1);
  // if target is 0, you need 0 coins
  minNumCoins[0] = 0;
  // go through every coin
  for (let denom of denoms) {
    // go through every amount
    for (let amount = 0; amount < minNumCoins.length; amount++) {
      // if denominator fits into the amount
      if (denom <= amount) {
        // min number of coins at this amount is the smaller of either 
          // what it is currently
            // or
              // the min amount of coins it takes at the current amount minus the current coin
                // adding 1 for using the current coin
        minNumCoins[amount] = Math.min(minNumCoins[amount], minNumCoins[amount - denom] + 1);
      }
    }
  }
  return minNumCoins[n] !== (n + 1) ? minNumCoins[n] : -1;
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;

// I-n, denoms
// O-integer (min number) or -1
// C-time, space
// E-target is 0,
//  you can't use the biggest down to smallest in order to find min change.