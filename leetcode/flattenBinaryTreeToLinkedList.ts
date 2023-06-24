// #114
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// I- TreeNode
// O- TreeNode Array
// C- In Place?
// E- empty head

function flatten(root: TreeNode | null): void {
  let head: TreeNode | null = null;
  const recursion = (node: TreeNode | null): void => {
    if (!node) return;

    recursion(node.right);
    recursion(node.left);
    node.left = null;
    node.right = head;
    head = node;
  };
  recursion(root);
  console.dir(root);
}
