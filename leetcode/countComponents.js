/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

// #323

 var countComponents = function(n, edges) {
  // visited array, set all to false
  const visited = new Array(n).fill(false);
  // create adjacency list
  const adjacent = [];
  for(let i = 0; i < n; i++) {
      adjacent.push([]);
  }
  let result = 0;
  // loop through edges
  for (let i = 0; i < edges.length ; i++) {
      let [node1, node2] = edges[i];
      adjacent[node1].push(node2);
      adjacent[node2].push(node1);
  }
  
  // traverse through list
  for (let i = 0; i < adjacent.length; i++) {
      let currNode = i;
       // if current index hasn't been visited
      if(visited[currNode] === false) {
          // follow the path of adjacent nodes
         dfs(visited, adjacent, currNode)
         result++
     }
  }
  
  function dfs(visited, adjList, currNode) {
      if (visited[currNode]) {
          return;
      }
      const edges = adjList[currNode];
      // set visited array to true
      visited[currNode] = true;
      for (let i = 0; i < edges.length; i++) {
          let edgeNode = edges[i];
          dfs(visited, adjList, edgeNode);
          
      }
      
}
  
   return result;
};

