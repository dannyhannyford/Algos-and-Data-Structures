function isValidSubsequence(array, sequence) {
    let result = true;
    let arrayIdx = 0;
    for (let i = 0; i < sequence.length; i++) {
        result = false;
        for (let j = arrayIdx; j < array.length; j++) {
            if (sequence[i] === array[j]) {
                result = true;
                arrayIdx++;
                break;
            }
            arrayIdx++;
        }
    }
  return result;
}
// O(n) time O(1) space

// cleaner version

const valid = (array, sequence)  => {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[idx] === sequence[seqIdx]) {
            seqIdx++;
        }
        arrIdx;
    }
    return seqIdx === sequence.length;
}
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  