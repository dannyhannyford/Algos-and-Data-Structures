// I- int steps, string path of steps
// O-int number of valleys
// C-
// E-
function countingValleys(steps, path) {
  // number of valleys
  let valleys = 0;
  // elevation
  let ev = 0;
  let flag = false;
  // loop through path 
  for (let i = 0; i < path.length; i++) {
    let dir = path[i];
    // if below sea level flag
    if (ev === 0 && dir === 'D') {
      flag = !flag;
    }
    if (ev === -1 && dir === 'U') {
      if (flag) valleys += 1;
      flag = !flag;
    }

    if (dir === 'D') {
      ev -= 1;
    } else if (dir === 'U') {
      ev += 1;
    }
    
  }
  return valleys;
    // if below see level, and changing direction to up
      // that's a valley

}