let mergeLinkedLists = (l1, l2) => {
  let dummy = new LinkedList(0);
  let curr = dummy;
  
  while (l1 && l2) {
    if (l2.value > l1.value) {
      curr.next = l1;
      curr = curr.next;
      l1 = l1.next;
    } else {
      curr.next = l2;
      curr = curr.next;
      l2 = l2.next;
    }
  }
  curr.next = l1 || l2;
    
  return dummy.next;
}