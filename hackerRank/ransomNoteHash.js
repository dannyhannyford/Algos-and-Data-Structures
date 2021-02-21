// I- magazine words, note word count, array of Strings
// O- console log 'Yes', or 'No'
// C-
// E- node > magazine, impossible

function checkMagazine(magazine, note) {
  if (note.length === 0 ) {
    console.log('Yes')
    return;
  }
  if (magazine.length < note.length) {
    console.log('No');
    return;
  }
  const noteWords = {};
  const magWords = {};
  note.forEach(word => {
    if (!noteWords.hasOwnProperty(word)) {
      noteWords[word] = 1;
    } else {
      noteWords[word] += 1;
    }
  })
  magazine.forEach(word => {
    if (!magWords.hasOwnProperty(word)) {
      magWords[word] = 1;
    } else {
      magWords[word] += 1;
    }
  })
  const noteKeys = Object.keys(noteWords);
  for (let i = 0; i < noteKeys.length; i++) {
    let word = noteKeys[i];
    if (magWords[word] === undefined || magWords[word] <= 0) {
      console.log('No');
      return;
    } else {
      magWords[word] -= noteWords[word];
      if(magWords[word] < 0) {
        console.log('No');
        return;
      }
    }
  }
  console.log('Yes')
  
  // go through note
    // attach object to a count

  // go through magazine array
    // check and decrease note amounts
}
