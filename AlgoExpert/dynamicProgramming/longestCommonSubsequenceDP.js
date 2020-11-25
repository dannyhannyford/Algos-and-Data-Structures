function longestCommonSubsequence(str1, str2) {
  const lcs = [];
  // build a 2D matrix with the strings
  // beginning with empty strings
  for (let i = 0; i < str2.length+ 1; i++) {
    const row = new Array(str1.length + 1).fill([]);
    lcs.push(row);
  }
  for (let i = 1; i < str2.length+1; i++) {
    for (let j = 1; j <str1.length + 1; j++) {
      // if the chars are the same
      if (str2[i - 1] === str1[j - 1]) {
        // store ine the current position
        // the diagonal lcs and append the current char
        lcs[i][j] = lcs[i - 1][j - 1].concat(str2[i - 1]);
      } else {
        // put the greater of either the position above or the position left into current position
        lcs[i][j] = lcs[i - 1][j].length > lcs[i][j - 1].length ? lcs[i - 1][j] : lcs[i][j - 1];
      }
    }
  }
  return lcs[str2.length][str1.length];
};

// I- 2 strings
// O- an array of single chars
// C- 
// E- 0 length no common subsequence
// nm * min(n, m) time && space
// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;