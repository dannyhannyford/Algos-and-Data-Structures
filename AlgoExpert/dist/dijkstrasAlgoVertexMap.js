"use strict";
// type GraphEdge = { to: number; weight: number };
// type WeightedAdjacencyList = GraphEdge[][];
Object.defineProperty(exports, "__esModule", { value: true });
exports.dijkstrasAlgorithm = void 0;
function dijkstrasAlgorithm(start, edges) {
    const num_of_vertices = edges.length;
    const min_dists = [];
    const init_dists = [];
    for (let i = 0; i < num_of_vertices; i++) {
        min_dists.push(Infinity);
        init_dists.push([i, Infinity]);
    }
    min_dists[start] = 0;
    const min_dists_heap = new MinHeap(init_dists);
    min_dists_heap.update(start, 0);
    while (min_dists_heap.heap.length !== 0) {
        const vertex_tuple = min_dists_heap.delete();
        if (vertex_tuple === undefined) {
            break;
        }
        if (vertex_tuple[1] === Infinity || vertex_tuple[1] === undefined) {
            break;
        }
        for (const edge of edges[vertex_tuple[0]]) {
            const [destination, dist_to_dest] = edge;
            const new_path_dist = vertex_tuple[1] + dist_to_dest;
            const curr_dest_dist = min_dists[destination];
            if (new_path_dist < curr_dest_dist) {
                min_dists[destination] = new_path_dist;
                min_dists_heap.update(destination, new_path_dist);
            }
        }
    }
    return min_dists.map((x) => (x === Infinity ? -1 : x));
}
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
class MinHeap {
    constructor(array) {
        // holds the position in the heap that each vertex is at
        this.vertexMap = array.reduce((obj, _, i) => {
            obj[i] = i;
            return obj;
        }, {});
        this.heap = this.buildHeap(array);
    }
    isEmpty() {
        return this.heap.length === 0;
    }
    buildHeap(array) {
        const first_parent_idx = Math.floor((array.length - 1) / 2);
        for (let curr_idx = first_parent_idx; curr_idx >= 0; curr_idx--) {
            this.heapifyDown(curr_idx, array.length - 1, array);
        }
        return array;
    }
    heapifyDown(curr_idx, end_idx, heap) {
        let child_one_idx = curr_idx * 2 + 1;
        while (child_one_idx <= end_idx) {
            const child_two_idx = curr_idx * 2 + 2 <= end_idx ? curr_idx * 2 + 2 : -1;
            let idx_to_swap;
            if (child_two_idx !== -1 &&
                heap[child_one_idx][1] > heap[child_two_idx][1]) {
                idx_to_swap = child_two_idx;
            }
            else {
                idx_to_swap = child_one_idx;
            }
            if (heap[idx_to_swap][1] < heap[curr_idx][1]) {
                this.swap(idx_to_swap, curr_idx, heap);
                curr_idx = idx_to_swap;
                child_one_idx = curr_idx * 2 + 1;
            }
            else {
                return;
            }
        }
    }
    heapifyUp(curr_idx, heap) {
        let parent_idx = Math.floor((curr_idx - 1) / 2);
        while (curr_idx > 0 && heap[curr_idx][1] < heap[parent_idx][1]) {
            this.swap(curr_idx, parent_idx, heap);
            curr_idx = parent_idx;
            parent_idx = Math.floor((curr_idx - 1) / 2);
        }
    }
    update(vertex, value) {
        this.heap[this.vertexMap[vertex]] = [vertex, value];
        this.heapifyUp(this.vertexMap[vertex], this.heap);
        console.log(this.vertexMap);
    }
    // not for this dijkstra's question
    // insert() {}
    delete() {
        if (this.heap.length === 0)
            return;
        this.swap(0, this.heap.length - 1, this.heap);
        const [vertex, distance] = this.heap.pop();
        delete this.vertexMap[vertex];
        this.heapifyDown(0, this.heap.length - 1, this.heap);
        return [vertex, distance];
    }
    peek() {
        if (!this.isEmpty()) {
            return this.heap[0];
        }
        return null;
    }
    swap(idx_1, idx_2, heap) {
        this.vertexMap[heap[idx_1][0]] = idx_2;
        this.vertexMap[heap[idx_2][0]] = idx_1;
        [heap[idx_1], heap[idx_2]] = [heap[idx_2], heap[idx_1]];
    }
}
