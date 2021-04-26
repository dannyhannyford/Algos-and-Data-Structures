// replace islands with 0
// C-
// E- don't touch border

function removeIslands(matrix) {
	for(let row = 0; row < matrix.length; row++) {
		for(let col = 0; col < matrix[row].length; col++) {
			const rowIsBorder = row === 0 || row === matrix.length - 1;
			const colIsBorder = col === 0 || col === matrix[row].length - 1;
			const isBorder = rowIsBorder || colIsBorder;
			if (!isBorder) continue;
			
			if (matrix[row][col] !== 1){
				continue;
			} 
			
			dfs(matrix, row, col);
		}
	}
	
	for(let row = 0; row < matrix.length; row++) {
		for(let col = 0; col < matrix[row].length; col++) {
			if(matrix[row][col] === 1) {
				matrix[row][col] = 0;
			} else if (matrix[row][col] === 2) {
				matrix[row][col] = 1;
			}
		}
	}
	
  return matrix;
}

function dfs(matrix, y, x) {
	// x, y
	matrix[y][x] = 2;
	const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	for (let k = 0; k < dirs.length; k++) {
		let dir = dirs[k]
		let newX = x + dir[1];
		let newY = y + dir[0];
		if (newX < 0 || newY < 0 || newX >= matrix[0].length || newY >= matrix.length) continue;
		if(matrix[newY][newX] !== 1) continue;
	  dfs(matrix, newY, newX);
	}
}

// Do not edit the line below.
exports.removeIslands = removeIslands;
