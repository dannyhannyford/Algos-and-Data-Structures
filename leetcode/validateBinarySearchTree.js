const isValidBST = (root) => {

    const recurse = (node, minValue, maxValue) => {
        if (node === null) return true;
        if (node.val <= minValue || node.val >= maxValue) return false;
        const leftIsValid = recurse(node.left, minValue, node.val);
        return leftIsValid && recurse(node.right, node.val, maxValue);
    }

    return recurse(root, -Infinity, Infinity);
}



// I- tree
// O- boolean 
// C-
// E- empty branches