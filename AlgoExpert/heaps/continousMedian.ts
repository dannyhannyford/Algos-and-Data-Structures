// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
class ContinuousMedianHandler {
  median: number | null;
  minHeap: number[];
  maxHeap: number[];

  constructor() {
    // Write your code here.
    this.minHeap = [];
    this.maxHeap = [];
    this.median = null;
  }

  insert(number: number) {
    // Write your code here.
  }

  getMedian() {
    return this.median;
  }

  peekMin() {
    return;
  }

  peekMax() {}

  swap(idx_1: number, idx_2: number, heap: number[]) {
    [heap[idx_1], heap[idx_2]] = [heap[idx_2], heap[idx_1]];
  }
}

// Do not edit the line below.
exports.ContinuousMedianHandler = ContinuousMedianHandler;
