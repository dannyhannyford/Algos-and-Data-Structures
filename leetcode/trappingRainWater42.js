/**
 * @param {number[]} height
 * @return {number}
 */

// naive approach
var trap = function(height) {
  // var first block
  let firstBlock = undefined;
  // var closing block
  let closingBlock = undefined;
  // current height
  let currentHeight = 1;
  let maxHeight = 1;
  let total = 0;
  
  // loop through height array (keeps track of our height)
  while(currentHeight <= maxHeight) {
      for (let i = 0; i < height.length; i ++) {
          maxHeight = Math.max(maxHeight, height[i]);
          // check for a first block, and closing block
          if (height[i] >= currentHeight) {
              if (firstBlock === undefined) {
                  firstBlock = i;
                } else if (closingBlock === undefined) {
                  closingBlock = i;
                  // if there is a closing block
                } else if (closingBlock) {
                  // first block === closing block
                  firstBlock = closingBlock;
                  // closing block = new block
                  closingBlock = i;
              }
              if (closingBlock) {
                // subtract first block + 1 from closing block
                  total += (closingBlock - (firstBlock + 1));
              }
          }
      }
      firstBlock = undefined;
      closingBlock = undefined;
      currentHeight++;
  }
  return total; 
};

// dp
var trap = function(height) {
  let total = 0;
  const lMax = new Array(height.length).fill(0);
  const rMax = lMax.slice();

  lMax[0] = height[0];
  // maximum height of water left to right
  for (let i = 1; i < height.length; i++) {
    lMax[i] = Math.max(height[i], lMax[i - 1])
  }

  rMax[height.length -1] = height[height.length - 1];
  // maximum height of water right to left
  for (let i = height.length - 2; i >= 0; i--) {
    rMax[i] = Math.max(height[i], rMax[i + 1]);
  }
  // minimum height between left and right
    // subtract height
  for (let i = 0; i < height.length; i++) {
    total += Math.min(lMax[i], rMax[i]) - height[i];
  }
  return total;
};