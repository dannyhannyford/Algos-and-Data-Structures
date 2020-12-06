// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
    let p1 = headOne;
    let p2 = headTwo;
    let prevP = null;


    while (p1 !== null && p2 !== null) {
        // if first pointer is smaller
        if (p1.value <= p2.value) {
            prevP = p1;
            p1 = p1.next;
        // if second pointer is smaller
        } else {
            // makng sure the merge list is connected to p2 before we move prevP
            // prevP is currently pointing to p1
            if (prevP !== null) {
                prevP.next = p2;
            }

            prevP = p2;
            p2 = p2.next;
            // now that it's connected move it back to p1
            prevP.next= p1;
        }
    }
    // point to the rest of the second list
    if (p1 === null) prevP.next = p2;
    // return new merged list whichever head was smaller to begin with
    return headOne.value < headTwo.value ? headOne : headTwo;
  }

  // time O (n + m)
  // Do not edit the line below.
  exports.LinkedList = LinkedList;
  exports.mergeLinkedLists = mergeLinkedLists;
  