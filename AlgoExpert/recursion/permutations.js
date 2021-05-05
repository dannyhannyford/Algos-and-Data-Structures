
// permutations of length n
function getPermutations(array) {
  const perms = [];
  const recurse = (index, array) => {
    if(index === array.length -1) {
      perms.push(array.slice());
    } else {
      for (let j = i; j < array.length; j++) {
        [array[i],array[j]] = [ array[j], array[i]];
        recurse(i+1, array);
        [array[i],array[j]] = [ array[j], array[i]];
      }
    }
  }
  recurse(0, array);
  return perms;
}


// Do not edit the line below.
exports.getPermutations = getPermutations;

