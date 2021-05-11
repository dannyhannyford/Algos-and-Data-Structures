function minHeightBst(array) {
  return contructMinHeightBST(array, null, 0 , array.length - 1);
}


// T- O(nlogn) S- O(n)
function constructMinheightBST(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;
  const midIdx = Math.floor((startIdx + endIdx)/2);
  const valueToAdd = array[midIdx];
  if (bst === null) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  constructMinheightBST(array, bst, startIdx, midIdx - 1);
  constructMinheightBST(array, bst, midIdx + 1, endIdx);
  return bst;
}

function minHeightBst(array) {
  return contructMinHeightBST(array, 0 , array.length - 1);
}

// reference the bst
// T- O(n) S- O(n)
function constructMinheightBST(array, startIdx, endIdx) {
  if (endIdx < startIdx) return null;
  const midIdx = Math.floor((startIdx + endIdx)/2);
  const bst = newBST(array[midIdx]);
  bst.left = constructMinheightBST(array, startIdx, midIdx - 1);
  bst.right = constructMinheightBST(array, midIdx + 1, endIdx)
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}