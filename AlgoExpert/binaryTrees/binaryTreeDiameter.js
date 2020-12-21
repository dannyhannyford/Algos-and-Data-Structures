// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
	// keeping track of running max
  let max = 0;

  const maxDepth = (root) => {
    if (root === null) {
      return 0;
    }
		// left subtree diamater
    const left = maxDepth(root.left);
		// right subtree diameter
    const right = maxDepth(root.right);
		// left height + right height === length of the longest path
    max = Math.max(max, left + right);
		// the plus one is height
    return Math.max(left, right) + 1;
  }
  maxDepth(tree);
  return max;
}
// T-O(n) S-O(h)
// n = number of nodes
// h = height of tree

// I- binary tree
// O- int max diameter
// C-
// E-

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;
