function numberOfWaysToMakeChange(n, denoms) {
  // make an empty array
  const ways = new Array(n+1).fill(0);
  // 1 way to get 0
  ways[0] = 1;
  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom];
      }
    }
  }
  return ways[n];
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;


/*
I- array of denominators, integer of total you're looking for
O- integer number of ways
C-
E- no ones to come up with any amount, in case of 0
*/

// time: O(N * M)
// space: O(N)