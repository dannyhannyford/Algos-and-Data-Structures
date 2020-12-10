function hasSingleCycle(array) {
  let numsVisited = 0;
  let currIdx = 0;
  while (numVisited < array.length) {
      if (numsVisited > 0 && currentIdx ===0) return false;
      numsVisisted++;
      currIdx = nextIdx(currIdx, array);
  }
  return currentIdx === 0;
}

const nextIdx = (currIdx, array) => {
    const jump = array[currIdx];
    const nextIdx = (currIdx + jump) % array.length;
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
// T: O(n)
// S: O(1)
// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
