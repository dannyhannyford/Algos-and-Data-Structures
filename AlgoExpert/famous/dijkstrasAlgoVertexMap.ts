type GraphEdge = { to: number; weight: number };
type WeightedAdjacencyList = GraphEdge[][];

export function dijkstrasAlgorithm(start: number, edges: number[][][]) {
  const num_of_vertices = edges.length;
  const min_dists: number[] = [];
  const init_dists: [number, number][] = [];
  for (let i = 0; i < num_of_vertices; i++) {
    min_dists.push(Infinity);
    init_dists.push([i, Infinity]);
  }
  min_dists[start] = 0;

  const min_dists_heap = new MinHeap(init_dists);
  min_dists_heap.update(start, 0);

  while (!min_dists_heap.isEmpty()) {
    const vertex_tuple: [vertex: number, curr_min_dist: number] | undefined =
      min_dists_heap.delete();

    if (vertex_tuple === undefined) {
      return;
    }
    if (vertex_tuple[1] === Infinity || vertex_tuple[1] === undefined) {
      break;
    }

    for (const edge of edges[vertex]) {
      const [destination, dist_to_dest] = edge;

      const new_path_dist = curr_min_dist + dist_to_dest;
      const curr_dest_dist = min_dists[destination];
      if (new_path_dist < curr_dest_dist) {
        min_dists[destination] = new_path_dist;
        min_dists_heap.update(destination, new_path_dist);
      }
    }
  }
  return min_dists.map((x) => (x === Infinity ? -1 : x));
}

class MinHeap {
  vertexMap: { [vertex: number]: number };
  heap: [number, number][];

  constructor(array: [number, number][]) {
    // holds the position in the heap that each vertex is at
    this.vertexMap = array.reduce((obj, _, i) => {
      obj[i] = i;
      return obj;
    }, {} as { [vertex: number]: number });
    this.heap = this.buildHeap(array);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  buildHeap(array: [number, number][]) {
    const first_parent_idx = Math.floor((array.length - 1) / 2);
    for (let curr_idx = first_parent_idx; curr_idx >= 0; curr_idx--) {
      this.heapifyDown(curr_idx, array.length - 1, array);
    }
    console.log(array);
    return array;
  }

  heapifyDown(curr_idx: number, end_idx: number, heap: [number, number][]) {
    let child_one_idx = curr_idx * 2 + 1;
    while (child_one_idx <= end_idx) {
      const child_two_idx = curr_idx * 2 + 2 <= end_idx ? curr_idx * 2 + 2 : -1;
      let idx_to_swap;
      if (child_two_idx !== -1 && child_one_idx > child_two_idx) {
        idx_to_swap = child_two_idx;
      } else {
        idx_to_swap = child_one_idx;
      }
      if (heap[idx_to_swap][1] < heap[curr_idx][1]) {
        this.swap(idx_to_swap, curr_idx, heap);
        curr_idx = idx_to_swap;
        child_one_idx = curr_idx * 2 + 1;
      } else {
        return;
      }
    }
  }

  heapifyUp(curr_idx: number, heap: [number, number][]) {
    let parent_idx = Math.floor((curr_idx - 1) / 2);
    while (curr_idx > 0 && heap[curr_idx][1] < heap[parent_idx][1]) {
      this.swap(curr_idx, parent_idx, heap);
      curr_idx = parent_idx;
      parent_idx = Math.floor((curr_idx - 1) / 2);
    }
  }

  update(vertex: number, value: number) {
    this.heap[this.vertexMap[vertex]] = [vertex, value];
    this.heapifyUp(this.vertexMap[vertex], this.heap);
  }
  // not for this dijkstra's question
  // insert() {}

  delete(): undefined | [number, number] {
    if (this.heap.length !== 0) return;

    this.swap(0, this.heap.length, this.heap);
    const min = this.heap.pop();

    return min;
  }

  peek(): [number, number] | null {
    if (!this.isEmpty()) {
      return this.heap[0];
    }
    return null;
  }

  swap(idx_1: number, idx_2: number, heap: [number, number][]): void {
    this.vertexMap[heap[idx_1][0]] = idx_2;
    this.vertexMap[heap[idx_2][0]] = idx_1;
    [heap[idx_1], heap[idx_2]] = [heap[idx_2], heap[idx_1]];
  }
}
