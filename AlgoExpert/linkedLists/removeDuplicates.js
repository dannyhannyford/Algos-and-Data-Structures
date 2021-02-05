class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let curr = linkedList;
  while (curr !== null) {
    let nextNode = curr.next;
    while (nextNode !== null && nextNode.value === curr.value) {
      nextNode = nextNode.next;
    }
    curr.next = nextNode;
    curr = nextNode;
  }
  return linkedList;
}

// I- head of linked list
// O- linkd list 
// C- (in place)
// E-

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
