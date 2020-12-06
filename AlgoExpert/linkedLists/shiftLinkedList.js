function botchedshiftLinkedList(head, k) {
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

  // if k is positive position of new tail (pnt) = length - k
  // if k is negative pnt = |k|
  function shiftLinkedList(head, k) {
    // a guarenteed length of one in the problem
    let listLength = 1;
    let listTail = head;
    while (listTail.next !== null) {
        listTail = listTail.next;
        listLength++
    }

    // modulo accounting for if k is longer than the length
    const offset = Math.abs(k) % listLength;
    if (offset === 0) return head;

    const newTailPosition = k > 0 ? listLength - offset : offset;
    let newTail = head;
    for (let i = 1; i < newTailPosition; i++) {
        newTail = newTail.next;
    }

    const newhead = newTail.next;
    newTail.next = null;
    listTail.next = head;
    return newhead;
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
  