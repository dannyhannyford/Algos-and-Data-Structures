function dijkstrasAlgorithm(start, edges) {
  const numberOfVertices = edges.length;

  const minDistances = [];
  for (let i = 0; i < numberOfVertices; i++) {
    minDistances.push(Infinity);
  }
  minDistances[start] = 0;

  const visited = new Set();

  while (visited.size != numberOfVertices) {
    const [vertex, currentMinDistance] = getVertexWithMinDistance(minDistances, visited);

    if (currentMinDistance === Infinity) {
      break;
    }
    visited.add(vertex);

    for (const edge of edges[vertex]) {
      const [destination, distanceToDestination] = edge;

      if (visitated.has(destination)) {
        continue;
      }

      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
      }
    }
  }
  return minDistances.map((x) => (x === Infinity ? -1 : x)); 
}

const getVertexWithMinDistance = (distances, visited) => {
  let currentMinDistance = Infinity;
  let vertext = -1;

  for (const [vertexIdx, distance] of distances.entries()) {
    if (visited.has(vertexIdx)) {
      continue;
    }
    if (distance <= currentMinDistance) {
      vertext = vertexIdx;
      currentMinDistance = distance;
    }
  }
  return [vertex, currentMinDistance];
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
