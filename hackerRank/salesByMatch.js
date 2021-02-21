// I-array of ints (represent color), 1-1-1 = 1 pair, 1 leftover
// O- number of pairs
// C-
// E-

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    // total # of socks
    let total = 0;
    // create object for counting socks
    let drawer = {};
    // loop through array, put them into object
    for (let i = 0; i < ar.length ; i++) {
      if (drawer[ar[i]] === undefined) {
        drawer[ar[i]] = 1;
      } else {
        drawer[ar[i]] += 1;
      }
    }
    console.log(drawer);
    // loop through object
    for ( let color in drawer)  {
      // divide every number by 2
      let result = Math.floor(drawer[color]/2);
      if (result >= 1) {
        // if the result is > 1 add to total pairs
        total += result;
      }
    };
    return total;
}