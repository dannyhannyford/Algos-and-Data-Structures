// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  const finalOrder = inOrder(tree);

  for (let idx = 0; idx < finalOrder.length; idx++) {
    const curr = finalOrder[idx];
    if(curr !== node) continue;

    if (idx === finalOrder.length -1) return null;

    return finalOrder[idx + 1];
  }

  const inOrder = (node, order = []) => {
    if (node === null) return order;

    inOrder(node.left, order);
    order.push(node);
    inOrder(node.right, order);

    return order;
  }
  
  return null;
}
// I- 
// O-
// C-
// E- if it's the last node, there is no successor
// in order traversal (l-root-r)
// right has no successor return null
// children can be trees or null

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
