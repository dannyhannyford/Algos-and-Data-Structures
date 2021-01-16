function isPalindrome(string) {
  // Write your code here.
  // halfway marker for checking
  let halfway = Math.floor(string.length/2)
  
  // stack
  let stack = [];
  // go through string
  for (let i = 0; i < string.length; i++) {
    //before halfway load stack
    if (i < halfway) {
      stack.push(string[i]);
      // when halfway
    } else {
      // if i === odd, continue
      if (string.length % 2 === 1 && halfway === i) {
        continue;
        // else start popping
      } else {
        let char = stack.pop();
        // compare char to the char popped
        if (char !== string[i]) {
          // return false
          return false;
        }
      }
    }
    
  }
  return true;

}

// T- O(n) S- O(n)

// Do not edit the line below.
exports.isPalindrome = isPalindrome;


// I- non-empty string
// O- boolean (palindrome?)
// C- 
// E- single character is a palindrome


// have a