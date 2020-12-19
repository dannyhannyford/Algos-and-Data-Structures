/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // starting and ending pointers
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;
    
    while (start < end) {
        maxArea = Math.max(maxArea, Math.min(height[start], height[end]) * (end - start));
        if (height[start] < height[end]) {
            start++;
        } else {
            end --;
        }
    }
    return maxArea;
};

// T-O(n) S- O(1)

// I- array of ints for height
// O- int for area
// C-
// E-