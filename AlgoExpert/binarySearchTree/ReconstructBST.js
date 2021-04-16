// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
	let bst = pOT(preOrderTraversalValues, 0);
  return bst;
}

function pOT(arr, idx) {
	
	// build node
	let node = new BST(arr[idx]);
	if(arr[idx + 1] < node.value) {
		node.left = pOT(arr, idx + 1);
	}
	if(arr[idx + 1] >= node.value) {
		node.right = pOT(arr, idx + 1)
	}
	return node;
}

function bubbleUp(arr) {
	
}

// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;
