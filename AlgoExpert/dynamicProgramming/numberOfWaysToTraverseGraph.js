function numberOfWaysToTraverseGraph(width, height, ViablePaths = 0) {
  let rowMax = height - 1;
	let colMax = width - 1;
	// helper function
	
	// function to go left
	// function going right
  return 0 + traverse(rowMax, 0, 0, rowMax, colMax);
}

function traverse (row, col, viablePaths, rowMax, colMax) {
	if(row === 0 && col === colMax) return (viablePaths + 1);
	if(!isValid(row, col, rowMax, colMax)) return 0;
	// go down
	traverse(row -1, col, viablePaths, rowMax, colMax)
	// go right
	traverse(row, col + 1, viablePaths, rowMax, colMax)
}

function isValid (row, col, rowMax, colMax) {
	return (row <= rowMax && col <= colMax && col >=0 && row >= 0)
}

// I-ints w, h
// O-number of ways
// C-width* height >= 2
// E-

// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;
