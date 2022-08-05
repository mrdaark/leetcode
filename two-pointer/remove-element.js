//https://leetcode.com/problems/remove-element/

var removeElement = function (nums, val) {
    let right = nums.length;
    for (let i = 0; i < right; i++) {

        if (nums[i] === val) {
            nums[i] = nums[right - 1];
            right--;
            nums.length = right;
            i--;
        }
    }

    return nums;
};

console.log(removeElement([1], 1));
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
