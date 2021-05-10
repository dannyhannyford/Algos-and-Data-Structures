/*
'*' is your location. There is exactly one '*' cell.
'#' is a food cell. There may be multiple food cells.
'O' is free space, and you can travel through these cells.
'X' is an obstacle, and you cannot travel through these cells.

You can travel to any adjacent cell north, east, south, or west of your current location if there is not an obstacle.

Return the length of the shortest path for you to reach any food cell. If there is no path for you to reach food, return -1.

Input: grid = [
["X","X","X","X","X","X"],
["X","*","O","O","O","X"],
["X","O","O","#","O","X"],
["X","X","X","X","X","X"]
]
Output: 3
Explanation: It takes 3 steps to reach the food.

Input: grid = [
["X","X","X","X","X"]
,["X","*","X","O","X"],
["X","O","X","#","X"],
["X","X","X","X","X"]
]
Output: -1
Explanation: It is not possible to reach the food.
*/

const shortestPath = (grid) => {
  let shortestLength = Infinity;
  let start = [null, null];
  let rowLength = grid.length - 1;
  let colLength = null;
  // look for starting asterisk
  for (let i = 0; i < grid.length; i ++) {
    for(let k = 0; k < grid[i].length; k++) {
      colLength = grid[i].length - 1;
      if (grid[i][k] === '*'){
        start = [i, k];
        break;
      }
      }
    }
    // traverse grid looking for food
  let result = dfs(start[0], start[1], rowLength, colLength);
    
  
 
  
  
  // return shortest length;
      // when food is found return shortest length
  function dfs(y, x, maxY, maxX, grid, pathLength = 0) {
    
    const directions = [[-1, 0],[0, 1], [1,0], [0,-1]];
    if(!isValid(y, x ,maxY, maxX)){
      return;
    }
    
    if(grid[y][x] === 'X') {
      return;
    }
    
    if(grid[y][x] === '#'){
      return Math.min(shortestLength, pathLength);
    }
    // checking everyDirection
    for(let dir of directions) {
      let [newY, newX] = [...dir];
      y = y + newY;
      x = x + newX;
      dfs(y, x, maxY, maxX, grid, pathLength + 1);
      
    }
    
    
  }
  
  function isValid(y, x, maxY, maxX){
    return (y >= 0 && x >= 0 && x<= maxX && y <= maxY)
  }
    
  return result === Infinity ? -1 : result;
}
  
   
  
    

//I-grid
//O-length or -1
//C-
//E-