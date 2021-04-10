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
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if(node.prev === null) {
      this.head = nodeToInsert
    } else {
      node.prev.next = nodeToInsert
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert        
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition++ !== position) node = node.next;
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }
  // traversing through until you find the value
  removeNodesWIthValue(value) {
    let node = this.head;
    while (node !== null) {
      const nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove)
    }
  }
  
  // accounting for head and tail node,
  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }
  containsNodeWithValue(value) {
    let node = this.head;
    while (node.value !== value && node !== null) {
      node = node.next;
    }
    return (node !== null);
  }

  removeNodeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}

// Feel free to add new properties and methods to the class.



// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
