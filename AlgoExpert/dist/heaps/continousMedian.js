// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
class ContinuousMedianHandler {
    constructor() {
        // Write your code here.
        this.minHeap = [];
        this.maxHeap = [];
        this.median = null;
    }
    insert(number) {
        // Write your code here.
    }
    getMedian() {
        return this.median;
    }
    peekMin() {
        return;
    }
    peekMax() { }
    swap(idx_1, idx_2, heap) {
        [heap[idx_1], heap[idx_2]] = [heap[idx_2], heap[idx_1]];
    }
}
// Do not edit the line below.
exports.ContinuousMedianHandler = ContinuousMedianHandler;
