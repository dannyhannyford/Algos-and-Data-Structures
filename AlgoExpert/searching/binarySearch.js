function binarySearch(array, target) {
  let l = 0;
  let r = array.length - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

// I- array of sorted nums, target
// O- target index, or -1 if it doesn't exist
// C-
// E-

// T- O(logn) S-(1)
// Do not edit the line below.
exports.binarySearch = binarySearch;
