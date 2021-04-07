// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.currSize = 0;
    this.cache = {};
    this.listOfMostRecent = new DoubleLinkedList();

  }

  insertKeyValuePair(key, value) {
    // Write your code here.
  }

  getValueFromKey(key) {
    // Write your code here.
  }

  getMostRecentKey() {
    // Write your code here.
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// hash table maps to nodes in the linked list


// insert key/value pairs with insertKeyValuePair
// retrieving key's values with getValueFromKey
// retrieve most recently used with getMostRecentKey
// maxSize property

// I
// O 
// C- constant time/space
// E

// Do not edit the line below.
exports.LRUCache = LRUCache;
