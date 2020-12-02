// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const result = [];
  // function to go through each branch
	const recurse = (node, total) => {
		// value for current node add to each result
    total+= node.value;
    // if no left or right we are at the end of the branch
		if (node.left === null && node.right === null) {
      // this is the sum of our branch
			result.push(total);
			return;
    }
    
		if (node.left) {
			recurse(node.left, total);
		}
		if (node.right) {
			recurse(node.right, total);
		}
		
		
		
  }
  // starting at root with a count of 0
	recurse(root, 0);
	return result;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
