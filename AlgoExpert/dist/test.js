"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dijkstrasAlgoVertexMap_1 = require("./dijkstrasAlgoVertexMap");
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
const result = (0, dijkstrasAlgoVertexMap_1.dijkstrasAlgorithm)(input.start, input.edges);
console.log(result);
