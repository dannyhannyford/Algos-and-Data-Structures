// I- 2 strings
// O- YES, or NO
// C-
// E- s1 && s2 are empty



function twoStrings(s1, s2) {

  if (s1.length === 0 && s2.length === 0) {
    return 'YES';
  } else if (s1.length === 0 || s2.length === 0) {
    return 'NO';
  }
  const s1Set = new Set();
  for (let i = 0; i < s1.length; i++) {
    s1Set.add(s1[i]);
  }
  for(let i = 0; i < s2.length; i++) {
    if(s1Set.has(s2[i])) {
      return 'YES';
    }
  }
  return 'NO';
}