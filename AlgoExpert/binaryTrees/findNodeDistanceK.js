// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodesDistanceK(tree, target, k) {
	// result array
	let result = []
	let parentArray = findTarget(tree, target, k , [], result);
  // search Parent Array
	searchParents(k, parentArray)
	
  return result;
}

function findTarget(tree, target, k, parentArray, result) {
	// check for null
	if(tree === null) return null;
	//check if tree is target
	if(tree === target) {
		// findKChildren function
		findKChildren(tree, k, result)
		// return parentArray	
		return parentArray
	}
		
		
	// if not add current node to parentArray
	parentArray.push(tree);
		// findTarget tree.left
	findTarget(tree.left, target, k, parentArray, result)
		//findTarget tree.right
	findTarget(tree.right, target, k, parentArray, result)
}

function findKChildren(tree, k, result) {
	if(tree === null) return null;
	if(k === 0) {
		result.push(tree.value);
		return;
	}
		if (k > 0) {
			findKChildren(tree.left, k-1, result)
			findKChildren(tree.right, k-1, result)
		}
	}

function searchParents(k, parentArray, result) {
	let node = parentArray.pop();
	k -= 1;
	if (k === 0) result.push(node.value);
	while(k > 0) {
		
	}
}

// take more time, working off diagram
// finding target, then find in 3 directions
// lost relationship of nodes
