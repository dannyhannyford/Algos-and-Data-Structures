// using hashmap
var lengthOfLongestSubstring = function(s) {
    const hashMap = new Map();
    let left = 0;
    let max = 0;
    
    for (let right = 0; right < s.length; right++) {
        let currChar = s[right];
        if (hashMap.has(currChar) && hashMap.get(currChar) >= left) {
            left = hashMap.get(currChar) + 1;
            }
            hashMap.set(currChar, right);
            max = Math.max(max, right - left + 1);
    }
    return max;
};

// using normal object
// T-O(n) S-O(n)
var lengthOfLongestSubstring = function(s) {
    const hashMap = {};
    let left = 0;
    let max = 0;
    
    for (let right = 0; right < s.length; right++) {
        let currChar = s[right];
        if (hashMap[currChar] !== undefined && hashMap[currChar] >= left) {	
            left = hashMap[currChar] + 1;
        }
        hashMap[currChar] = right;
        max = Math.max(max, right - left + 1);
    }
    return max;
};
