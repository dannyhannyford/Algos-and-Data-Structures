"use strict";
// type GraphEdge = { to: number; weight: number };
// type WeightedAdjacencyList = GraphEdge[][];
Object.defineProperty(exports, "__esModule", { value: true });
exports.dijkstrasAlgorithm = void 0;
function dijkstrasAlgorithm(start, edges) {
    var num_of_vertices = edges.length;
    var min_dists = [];
    var init_dists = [];
    for (var i = 0; i < num_of_vertices; i++) {
        min_dists.push(Infinity);
        init_dists.push([i, Infinity]);
    }
    min_dists[start] = 0;
    var min_dists_heap = new MinHeap(init_dists);
    min_dists_heap.update(start, 0);
    while (min_dists_heap.heap.length !== 0) {
        var vertex_tuple = min_dists_heap.delete();
        if (vertex_tuple === undefined) {
            break;
        }
        if (vertex_tuple[1] === Infinity || vertex_tuple[1] === undefined) {
            break;
        }
        for (var _i = 0, _a = edges[vertex_tuple[0]]; _i < _a.length; _i++) {
            var edge = _a[_i];
            var destination = edge[0], dist_to_dest = edge[1];
            var new_path_dist = vertex_tuple[1] + dist_to_dest;
            var curr_dest_dist = min_dists[destination];
            if (new_path_dist < curr_dest_dist) {
                min_dists[destination] = new_path_dist;
                min_dists_heap.update(destination, new_path_dist);
            }
        }
    }
    return min_dists.map(function (x) { return (x === Infinity ? -1 : x); });
}
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
var MinHeap = /** @class */ (function () {
    function MinHeap(array) {
        // holds the position in the heap that each vertex is at
        this.vertexMap = array.reduce(function (obj, _, i) {
            obj[i] = i;
            return obj;
        }, {});
        this.heap = this.buildHeap(array);
    }
    MinHeap.prototype.isEmpty = function () {
        return this.heap.length === 0;
    };
    MinHeap.prototype.buildHeap = function (array) {
        var first_parent_idx = Math.floor((array.length - 1) / 2);
        for (var curr_idx = first_parent_idx; curr_idx >= 0; curr_idx--) {
            this.heapifyDown(curr_idx, array.length - 1, array);
        }
        return array;
    };
    MinHeap.prototype.heapifyDown = function (curr_idx, end_idx, heap) {
        var child_one_idx = curr_idx * 2 + 1;
        while (child_one_idx <= end_idx) {
            var child_two_idx = curr_idx * 2 + 2 <= end_idx ? curr_idx * 2 + 2 : -1;
            var idx_to_swap = void 0;
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
    };
    MinHeap.prototype.heapifyUp = function (curr_idx, heap) {
        var parent_idx = Math.floor((curr_idx - 1) / 2);
        while (curr_idx > 0 && heap[curr_idx][1] < heap[parent_idx][1]) {
            this.swap(curr_idx, parent_idx, heap);
            curr_idx = parent_idx;
            parent_idx = Math.floor((curr_idx - 1) / 2);
        }
    };
    MinHeap.prototype.update = function (vertex, value) {
        this.heap[this.vertexMap[vertex]] = [vertex, value];
        this.heapifyUp(this.vertexMap[vertex], this.heap);
        console.log(this.vertexMap);
    };
    // not for this dijkstra's question
    // insert() {}
    MinHeap.prototype.delete = function () {
        if (this.heap.length === 0)
            return;
        this.swap(0, this.heap.length - 1, this.heap);
        var _a = this.heap.pop(), vertex = _a[0], distance = _a[1];
        delete this.vertexMap[vertex];
        this.heapifyDown(0, this.heap.length - 1, this.heap);
        return [vertex, distance];
    };
    MinHeap.prototype.peek = function () {
        if (!this.isEmpty()) {
            return this.heap[0];
        }
        return null;
    };
    MinHeap.prototype.swap = function (idx_1, idx_2, heap) {
        var _a;
        this.vertexMap[heap[idx_1][0]] = idx_2;
        this.vertexMap[heap[idx_2][0]] = idx_1;
        _a = [heap[idx_2], heap[idx_1]], heap[idx_1] = _a[0], heap[idx_2] = _a[1];
    };
    return MinHeap;
}());
