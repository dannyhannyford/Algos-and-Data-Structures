// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
	let leadNode = head;
  let preK = head;
  let counter = 1;
  // send the lead Node K + 1 places ahead
	while (counter <= k) {
		leadNode = leadNode.next;
		counter++;
  }
  // if there were only K nodes
	if (leadNode === null) {
		head.value = head.next.value;
		head.next = head.next.next;
		return;
  }
  // move both pointers simultaneously until you get to the tail
	while (leadNode.next !== null) {
		leadNode = leadNode.next;
		preK = preK.next;
  }
  // removing Kth node
	preK.next = preK.next.next;
}
// I- Head and kth node from the end
// O- nothing
// C-
// E-K amount of nodes, you have to change the head and next pointer
// time O(n) space O(1) 
// going through the linked list once is n time

// Do not edit the line below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
