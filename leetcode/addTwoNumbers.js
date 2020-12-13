const addTwoNumbers = (l1, l2) => {
    // only one digit per node
    let digit = 0;
    // leftover sum is larger than digit
    let carry = 0;
    let head = new ListNode('dummy', null);
    let curr = head;

    // while we would possibly need another node
    while (l1 || l2 || carry) {
        curr.next = new ListNode();
        curr = curr.next;
        let s1 = l1 ? l1.val : 0;
        let s2 = l2 ? l2.val : 0;
        // raw sum
        let sum = (s1 + s2 + carry);
        
        // 0 or 1
        carry = Math.floor(sum / 10);
        // single digit
        digit = sum % 10;
        // apply to current value
        curr.val = digit;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return head.next;
}

// T- O(n) S- O(n)
// the larger one would be time and space of n/m

// I- 2 non-empty linked lists/ non negative numbers
// O- One linked list
// C- 
// E- No leading 0's except 0 itself

// stored in reverse order
// single digit nodes
// add the numbers, return the sum as a linked list