// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // using this node for it's next property
  const headPointer = new LinkedList(0);
  let currNode = headPointer;
  let carry = 0;
  
  let node1 = linkedListOne;
  let node2 = linkedListTwo;

  while(node1 !== null || node2 !== null || carry !== 0) {
    const value1 = node1 !== null ? node1.value : 0;
    const value2 = node2 !== null ? node2.value : 0;
    const valueSum = value1 + value2 + carry;

    const newValue = valueSum % 10;
    const newNode = new LinkedList(newValue);
    currNode.next = newNode;
    currNode = newNode;

    carry = Math.floor(valueSum / 10);
    node1 = node1 !== null ? node1.next : null;
    node2 = node2 !== null ? node2.next : null;
  }
  return headPointer.next;
}

// I- 2 linked lists
// O- 1 linked list
// C- cannot modify
// E- empty lists, different lengths

// T-O(max of n, m) S- O(max of n, m)

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
