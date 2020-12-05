function twoNumberSum(array, targetSum) {
    const result = [];
    const leftOver = {};

    // traversing through the array
    array.forEach((e,idx) => {
        // setting key to be the difference of targetSum and current value
        // setting value to be the index
        leftOver[targetSum - e] = idx;
    })
    // traversing through the array
    array.forEach((e, idx) => {
      // if leftOver has the number, and it's not the same idx set that to result
      if (leftOver[e] && idx !== leftOver[e]) {
        if (result.length === 0) {
          result.push(e, targetSum - e);
        }
      }
    })
      return result;
  }
  // time O(n) space O(n)
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  