function spiralTraverse(array) {
	let result = [];
  // check if empty
	if(array.length === 0) return result;
	// cycle and check if arrays are empty
	// set row and column boundaries
	let rowStart = 0;
	let rowEnd = array.length - 1;
	let colStart = 0;
	let colEnd = array[0].length - 1;
	
	while(colStart <= colEnd && rowStart <= rowEnd) {
		for(let currCol = colStart; currCol <= colEnd; currCol++) {
			result.push(array[rowStart][currCol])
		}
		
			for(let currRow = rowStart + 1; currRow <= rowEnd; currRow++) {
				result.push(array[currRow][colEnd])
	
		}
		
		
			
			for(let currCol = colEnd - 1; currCol >= colStart; currCol--) {
				if(rowStart === rowEnd) break;
				result.push(array[rowEnd][currCol])
			}
		
				
				for(let row = rowEnd - 1; row > rowStart; row--) {
					if(colStart === colEnd) break;
					result.push(array[row][colStart])

			}
		colStart++;
		colEnd--;
		rowEnd--;
		rowStart++;
		}
		

	
	// right
	// down
	// left
	// up
	
	// return result;
	 return result;
}