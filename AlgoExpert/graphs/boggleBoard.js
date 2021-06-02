function boggleBoard(board, words) {
	let wordsFound = [];
	let r = board.length;
	let c = board[0].length;
	// iterate through board
	for(let row = 0; row < r; row) {
		for(let col = 0; col < c; col++) {
			// iterate through words
			for(let word of words) {
				// dfs looking to see if you can create the word
					dfs(row, col, word, 0, words) ;
			}
		}
	}
		
function dfs(row, col, word, wordIndex = 0, words) {
	// checking if the current letter in matrix is equal to letter in word
		if(isValid(row, col , word, wordIndex)) {
			if(wordIndex === word.length - 1) {
				// replace word with empty string
				result.push(word);
				return;
			} else {
				// go all different directions with dfs
			}
		}
	return;
}

function isValid(row, col, word, wordIndex) {
	return (row >= 0 && col >= 0 && row < r && col < c && board[row][col] === word[wordIndex])
}

	
	return wordsFound;
}
	
// isValid function

// dfs function params [matrix row, matrix col, word, wordIndex, words

	



// I- matrix, string array
// O- string array
// C-
// E- case matters,


// Do not edit the line below.
exports.boggleBoard = boggleBoard;