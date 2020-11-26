/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// sorting our list while merging
var mergeTwoLists = function(l1, l2) {
  // node head for merged list
  let merged = { val : -1, next : null };
  // currentNode
  let curr = merged;
  
  // while there are both nodes to alternate between
  while(l1 && l2) {
      // if l1 is smaller or equal to l2
      if (l1.val <= l2.val) {
          // current nodes next node is l1
          curr.next = l1;
          // remove l1 head
          l1 = l1.next;
          // l2 is bigger
      } else {
          // next node is l2
          curr.next = l2;
          // remove l2 head
          l2 = l2.next;
      }
      curr = curr.next;
  }
  // one of the lists ran out, so the remaining nodes will be the other list
  curr.next = l1 || l2;
  // return first value of merged list which is merged.next
  return merged.next;
};
// I-2 linked lists
// O-1 merged list
// C-
// E-either or both lists being null
// time O(n + m) space (1)
// length of list 1 and list 2