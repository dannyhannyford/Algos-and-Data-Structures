// DFS
var numIslands = function(grid) {
    let rowMax = grid.length;
    let colMax = grid[0].length;
    let islandTotal = 0;
    // loop through grid
    for(let row = 0; row < rowMax; row++) {
      for(let col = 0; col < colMax; col++) {
        // check if we are at an island
        if (grid[row][col] === '1') {
          // DFS searching 
          dfs(grid, row, col);
          islandTotal +=1;
        }
      }
    }
    return islandTotal;
};

function dfs (grid, row, col) {
  if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') {
    return;
  }
  grid[row][col] = 0;
  dfs(grid, row + 1, col);
  dfs(grid, row - 1, col);
  dfs(grid, row, col + 1);
  dfs(grid, row, col - 1);
}


//BFS

var numIslands = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  if (m === 0 || n === 0) return 0;
  
  const queue = [];

  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let count = 0;
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === '1') {
              count++;
      grid[i][j] = '0';
              queue.push([i, j]);
              while (queue.length > 0) {
                  const [x, y] = queue.shift();
                  for (const direction of directions) {
                      const [dir_x, dir_y] = direction;
                      const nbr_x = x + dir_x;  // nbr = neighbor
                      const nbr_y = y + dir_y;
                      if (withinBounds(nbr_x, nbr_y, m, n) && grid[nbr_x][nbr_y] === '1') {
                          grid[nbr_x][nbr_y] = '0';
                          queue.push([nbr_x, nbr_y]);
                      }
                  }
              }
          }
      }
  }

  return count;
};

/**
* @param {int} x 
* @param {int} y
* @param {int} m
* @param {int} n
* @return {boolean}
*/

function withinBounds(x, y, m, n) {
  return 0 <= x && 0 <= y && x < m && y < n;
}