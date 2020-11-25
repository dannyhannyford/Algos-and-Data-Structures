function maxSumIncreasingSubsequence(array) {
  const sequences = new Array(array.length);
	const sums = array.map(num => num);
	let maxSumIdx = 0;
	for (let i = 0; i < array.length; i++) {
		const currentNum = array[i];
		for (let j = 0; j < i; j++) {
			const otherNum = array[j];
			if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
				sums[i] = sums[j] + currentNum;
			 	sequences[i] = j;
			}
		}
			 if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
	}
	return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}

const buildSequence = (array, sequences, currentIdx) => {
		const sequence = [];
		while (currentIdx !== undefined) {
			sequence.unshift(array[currentIdx]);
			currentIdx = sequences[currentIdx];
		}
		return sequence;
	}
// I- array at least 1 number
// O- integer sum, array of integers to create sum
// C- has to be increasing numbers
// E- negative numbers, 0
// assume only 1 answer
// O(n^2) time O(n) space

// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;