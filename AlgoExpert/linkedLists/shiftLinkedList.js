function shiftLinkedList(head, k) {
    if (k === 0) return head;
    let preShift = head;
    let curr = head;
    let shiftHead = null;
    // not accounting for k being greater than the linked list length

    // positive k
    if (k > 0) {
        while (k > 0) {
            curr = curr.next;
            k--;
        }

        // implement later for bigger than length

        if (curr.next === null) {
            shiftHead = head.next;
            curr.next = head;
            head.next = null;
            return shiftHead;
        }

        while (curr.next !== null) {
            preShift = preShift.next;
            curr = curr.next;
        }
        shiftHead = preShift.next;
        preShift.next = null;
        curr.next = head;
        return shiftHead;

    } else {
        k +=1;
        while (k < 0) {
            curr = curr.next;
        }
        shiftHead = curr.next;
        curr.next = null;
        curr = shiftHead;
        while (curr !== null) {
            curr = curr.next;
        }
        curr.next = preShift;
        return shiftHead;
    }
  }
  
  // This is the class of the input linked list.
  class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Do not edit the line below.
  exports.shiftLinkedList = shiftLinkedList;
  