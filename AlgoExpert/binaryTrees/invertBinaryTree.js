function invertBinaryTree(tree) {
  if (tree === null) {
    return;
  }
  swap(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swap(tree) {
const left = tree.left;
tree.left = tree.right;
tree.right = left;
}
// T-O(n) S-O(depth)

function invertBinaryTree(tree) {
    // iterative
    let queue = [tree];
    while (queue.length > 0) {
        let curr = queue.shift();
        // forgot to check for null
        if (curr === null) continue;
        let temp =  curr.left;
        curr.left = curr.right;
        curr.right = temp;
        queue.push(curr.left, curr.right);
    }
    return tree;
}
  // T-O(n) S-O(n)

// This is the class of the input binary tree.
class BinaryTree {
constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    }
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
