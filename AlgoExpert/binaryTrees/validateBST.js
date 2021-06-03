
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
	return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
	if (tree === null) return true;
	if (tree.value < minvalue || tree.value >= maxValue) return false;
	const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
	return leftIsValid && validateBstHelper(tree.irght, tree.value, maxValue);
}


exports.BST = BST;
exports.validateBst = validateBst;
