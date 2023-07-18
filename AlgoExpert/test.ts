import { dijkstrasAlgorithm } from "./dijkstrasAlgoVertexMap";

const input = {
  start: 0,
  edges: [
    [[1, 7]],
    [
      [2, 6],
      [3, 20],
      [4, 3],
    ],
    [[3, 14]],
    [[4, 2]],
    [],
    [],
  ],
};

const result = dijkstrasAlgorithm(input.start, input.edges);

console.log(result);
