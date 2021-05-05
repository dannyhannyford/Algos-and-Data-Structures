function powerset(array) {
  // Write your code here.
	let result = [];
	result.push([])
	const recurse = (currArray, currIdx, currArrayLength) => {
		// if currArray is size of currArrayLength
		// traverse through array
		for(let i = 0; i < array.length; i++) {
			let nextIdx = i;
			while(nextIdx < array.length) {
				let newArray = currArray.concat(array[i]);
				recurse(newArray, nextIdx)
				nextIdx++;
						}
			
			currArray.push(array[i]);
			
		}
		
			// push currArray to result
		// if nextIdx >= currArrayLength
			
	}
	
	recurse([], 0, 0, 0)
	
	return result;
}

