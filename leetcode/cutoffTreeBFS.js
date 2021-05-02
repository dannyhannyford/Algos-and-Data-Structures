/**
 * @param {number[][]} forest
 * @return {number}
 */
 var cutOffTree = function(forest) {
  let maxY = forest.length - 1;
  let maxX = forest[0].length - 1;
  
  const sortedTrees = sortTrees(forest);
  
  // setting first tree to be a null tree at 0,0
  let steps = 0;
  let startRow = 0;
  let startCol = 0;
  
  // start at 0,0
  // check every direction
  
  function bfs(matrix, y, x, currSteps) {
      if (isValid(matrix, y, x, maxY, maxX)) {
          // check for smallest possible cut
          if (matrix[y][x] <= ) {
              
  }
      }
  }
  
};

function sortTrees (forest) {
  // sort trees
  const trees = [];
  for(let row = 0; row < forest.length; row++) {
      for(let col = 0; col <forest[0].length; col++) {
          if(forest[row][col] > 1) {
              let height = forest[row][col];
              trees.push([row, col, height])
          }
      }
  }
  trees.sort((a, b) => a[2]-b[2])
  return trees;
}

function getNeighbors(matrix, visited, y, x, maxY, maxX) {
  const neighbors = [];
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  
  for(let i = 0; i < dirs.length; i++) {
      const nextRow = y + dirs[i][0];
      const nextCol = x + dirs[i][1];
      if(isValid(matrix, visited, y, x, maxY, maxX)) {
          neighbors.push([nextRow, nextCol]);
      }
  }
  return neighbors;
}


function isValid(matrix, visited, y, x, maxY, maxX) {
  const isInBounds = (0 <= y && 0 <= x && y <= maxY && x <= maxX)
  if (!isInBounds || visited[y][x]) return false;
  return (!visited[y][x] && matrix[y][x]);
}