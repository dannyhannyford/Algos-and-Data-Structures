function kadanesAlgorithm(array) {
  let maxSoFar = array[0];
  let maxEndingHere = array[0];
  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}

// T- O(n) S- O(1)

// I- array
// O- int
// C-
// E-
exports.kadanesAlgorithm = kadanesAlgorithm;
