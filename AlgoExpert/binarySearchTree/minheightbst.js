function minHeightBst(array) {
  let lo = 0;
	let hi = array.length -1;
	// return tree filler function
	return fillTree(lo, hi, array);
}

function fillTree(lo, hi, array) {
	if(lo > hi) return null;
	let mid = Math.floor((hi + lo)/2);
	// insert new value, 
	let root = new BST(array[mid]);
	// filling left
	root.left = fillTree(lo, mid -1, array);
	// filling right
	root.right = fillTree(mid + 1, hi, array);
	
	return root
}
// minimize height

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

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
