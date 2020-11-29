// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  let singleHop = head.next;
  let dubHop = head.next.next;
  while (singleHop !== dubHop) {
    singleHop = singleHop.next;
    dubHop = dubHop.next.next;
  }
  singleHop = head;
  while (singleHop !== dubHop) {
    singleHop = singleHop.next;
    dubHop = dubHop.next;
  }
  return singleHop;
}
// I-linked list
// O-node that starts the loop
// C- O(1) space
// E- points back to head,

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.findLoop = findLoop;
