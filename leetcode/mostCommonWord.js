/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
  // current word
  let mostCommon = ['', 0];
  // set of words
  const wordBank = {};
  // set paragraph/ banned to lowercase
    paragraph = paragraph.toLowerCase().split(/\W+/);
  // traverse through paragraph
  for(let word of paragraph) {
    // if char is not a letter
    if (word) {
      for(let i = 0; i < banned.length; i++) {
        // if currWord !== any bannd
        if (word === banned[i]) {
          continue;
        } else {
          // add curr word to set (+1 if exists)
          if(wordBank.hasOwnProperty(word)) {
            wordBank[word] +=1
          } else {
            wordBank[word] = 1;
          }
          // compare mostCommonWord
          if(wordBank[word] > mostCommon[1]) {
            mostCommon = [word, wordBank[word]];
          }
        }
      }
    }
  }

  // return most CommonWord
  return mostCommon[0];
}

// I-string, array of strings
// O- word (string)
// C- 
// E- at least one word viable, unique answer, case insensitive
