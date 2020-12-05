function reverseLinkedList(head) {
	// if only one node
	if (head.next === null) return head;
	let curr = head.next;
	let lead = curr.next;
	// head now the tail of the revList
	head.next = null;
	// while not at the end continue
	while (lead) {
		// setting currents next to the head
		curr.next = head;
		// setting the head of revList to be curr
		head = curr;
		// current is now the lead node
		curr = lead;
		// lead node is lead.next
		lead = lead.next;
	}
	curr.next = head;
	head = curr;
	// when we reach the tail
	return head
}

// Do not edit the line below.
exports.reverseLinkedList = reverseLinkedList;
