// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // set head
  setHead(node) {
    // if no head there is no tail
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    // set in front of head
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    // if no tail there is no head
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    // normally insert after head
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    // if node is head
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    
  }
  removeNodesWIthValue(value) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove)
    }
  }
}

// Feel free to add new properties and methods to the class.



// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
