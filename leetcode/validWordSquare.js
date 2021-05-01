var validWordSquare = function(words) {
  // traverse words
  for(let row = 0; row < words.length; row++) {
      let word = words[row];
      // traverse word
      for(let col = 0; col < word.length; col++) {
          let letter = word[col];
          if(words[col] && !words[row] || !words[col] && words[row]) return false;
          let opp = words[col][row];
          if (letter !== opp) return false;
      }
  }
return true;
};