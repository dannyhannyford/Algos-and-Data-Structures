function knapsackProblem(items, capacity) {
    
    const matrix = [];
    for (let i = 0; i <= items.length; i++) {
        const row = new Array(capacity + 1).fill(0);
        matrix.push(row);
    }

    for (let i = 1; i < matrix.length; i++) {
      let w = items[i-1][1];
      let v = items[i-1][0];
        for (let j = 0; j < matrix[i].length; j++) {
            if (w <= j) {
                matrix[i][j] = Math.max(matrix[i-1][j], matrix[i-1][j - w] + v)
            } else {
              matrix[i][j] = matrix[i-1][j]
            }
            
        }
    }
    
    
    return [matrix[items.length][capacity], getIdx(matrix, items)];
  }

const getIdx = (matrix, items) => {
  const sequence = [];
  let i = matrix.length - 1;
  let c = matrix[0].length - 1;
  while (i > 0) {
    if (matrix[i][c] === matrix[i-1][c]) {
      i -= 1;
    } else {
      sequence.unshift(i - 1);
      c -= items[i - 1][1];
      i -= 1;
    }
      if (c === 0 ) break;
  }
  return sequence;
}

knapsackProblem([[1,2], [4,3], [5,6], [6,7]], 10);
  // I-array with [value, weight], int capacity
  // O-[value, [indices picked]]
  // C-
  // E-
  
  // Do not edit the line below.
  exports.knapsackProblem = knapsackProblem;
  