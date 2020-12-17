var twoSum = function(nums, target) {
    let differences = {};
    // one pass
    // T-O(n) S-O(n)
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let potential = target - num;
        if (differences[num] !== undefined) {
            return [differences[num], i];
        } else {
            differences[potential] = i;
        }
    }
    return [];
};