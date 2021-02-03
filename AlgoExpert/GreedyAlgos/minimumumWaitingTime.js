function minimumWaitingTime(queries) {
  let totalTime = 0;
  // logn sort so smallest queries first
  queries.sort((a, b) => a - b);
  // loop through queries
  for (let i = 0; i < queries.length; i ++) {
    const queryTime = queries[i];
    // how many times this query will be carried over to the next query
    const carriedTime = queries.length - (i + 1);
    // adding the total query time for the current query to the overall total
    totalTime += queryTime * carriedTime;
  }
  
  return totalTime;
}

exports.minimumWaitingTime = minimumWaitingTime;

// I- non-empty array of positive integers, time fore queries
// O- time to wait int
// C-
// E-

// T- O(logn) S- O(1)

// waiting time is amount of time that 
// it must wait before execution starts