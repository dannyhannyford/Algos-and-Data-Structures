function maxSubsetSumNoAdjacent(array) {
	// if array is empty return 0
	if(array.length === 0) {
		return 0;
	}
	// if length is 1 return the value
	if (array.length === 1) {
		return array[0];
	}
	// copy the array
	const maxSums = array.slice();
	// find max sum at index 1
	maxSums[1] = Math.max(array[0], array[1]);
	
	// loop through array starting at 2
	for (let i = 2; i < array.length; i++) {
		// find max sum at index i
			maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2] + array[i]);
	}
	// return last index as it's the max Sum
	return maxSums[maxSums.length - 1];	
}

/*
I- array
O- integer
C- non-adj elements
E- 0 and negative numbers, empty array
*/

// time: O(N)
// space: O(N)

// solving for space: 0(1)

function maxSubsetSumNoAdjacent(array) {
	// if array is empty return 0
	if(array.length === 0) {
		return 0;
	}
	// if length is 1 return the value
	if (array.length === 1) {
		return array[0];
	}
	// pointer for n-2
  let second = array[0];
	// pointer for n -1
  let first = Math.max(array[0], array[1]);
	
	// loop through array starting at 2
	for (let i = 2; i < array.length; i++) {
		// current index - 1
    let current = Math.max(first, second + array[i]);
    second = first;
    first = current;
	}
	// return last index as it's the max Sum
	return first;
}