function invertBinaryTree(tree) {
    // recursive
    if (tree === null) {
        return;
    }
    let temp = tree.right;
    tree.right = tree.left;
    tree.left = temp;

    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
    
    return tree;
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
