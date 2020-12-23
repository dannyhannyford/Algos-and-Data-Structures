function dijkstrasAlgorithm(start, edges) {

  
}
// T- O() S- O()

// weighted?
// positive/negative weights?
// directed?
// no self loops

// adjacency list/sometimes singly linked list

// [[destination/node/vertex, distance/weight]]
// index is the node/vertext/destination
// starting node starts at 0, all the rest start at infinity
// (start node)
// pick the shortest distance in the graph to a node
// calculate the distances to any other nodes it touches
// once you calculate all the distances, the current node is now added to the set
// if a node goes to one that is already in the set, skip it, as it has to be a shorter distance with our algo
// stop when the length of the set is the number of nodes


// finding node with min value
// use an array, or use min heap -pop, update, insert
// min heap
// T-O(v+e) * log(v) S-O(v)
// array
// T-O(v^2 + e) S-O(v)

// I-
// O-
// C-
// E-
exports.dijkstrasAlgorithm = dijkstrasAlgorithm;
