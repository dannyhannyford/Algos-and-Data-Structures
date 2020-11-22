class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
		// function to go through each node
    const recurse = (node) => {
			// push the node's name
			array.push(node.name);
			// go through all the nodes children
			node.children.forEach((child) => {
				// call the function on every child node
				recurse(child);
			})
		}
	// starting our function
	recurse(this);
  return array;
	}
}
// I- empty array
// O- array of strings
// C-
// E-
// Do not edit the line below.
exports.Node = Node;
