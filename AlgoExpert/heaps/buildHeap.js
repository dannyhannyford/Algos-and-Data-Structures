class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length -2) / 2);
    for (let currIdx = firstParentIdx; currIdx >=0; currIdx--) {
      this.siftDown(currIdx, array.length -1, array);
    }
    return array;
  }

  siftDown(currIdx, endIdx, heap) {
    let childOneIdx = currIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx = currIdx * 2 + 2 <= endIdx ? currIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currIdx]) {
        this.swap(currIdx, idxToSwap, heap);
        currIdx = idxToSwap;
        childOneIdx = currIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currIdx, heap) {
    let parentIdx = Math.floor((currIdx - 1) / 2);
    while (currIdx > 0 && heap[currIdx] < heap[parentIdx]) {
      this.swap(currIdx, parentIdx, heap);
      currIdx = parentIdx;
      parentIdx = Math.floor((currIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
}

exports.MinHeap = MinHeap;