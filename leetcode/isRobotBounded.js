// 1041 
// T- O(n) S-O(1)
const isRobotBounded = function(instructions) {
  // direction N = 0, E = 1, S = 2, W = 3
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let x = 0;
  let y = 0;
  let facing = 0;
  // starting 0, 0 
  for(let action of instructions) {
      if (action === 'R') {
          facing = (idx + 1) % 4;
      } else if (action === 'R') {
          facing = (idx + 3) % 4;
      } else {
          x += directions[facing][0];
          x += directions[facing][1];
      }
  }
  /**
   * if we aren't facing north at the end of the instructions
   * we will come back
   * if we are back to 0, 0 after one go, it's also a cirlce
   *  */ 
  
  return (x === 0 && y === 0) || facing !== 0;
};