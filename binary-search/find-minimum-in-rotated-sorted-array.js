/** https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/ */

var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;
        if (nums[left] <= nums[mid]) {
            if (nums[left] >= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (nums[mid - 1] < nums[mid]) {
                right = mid - 1;
            } else {
                return nums[mid];
            }
        }
    }
    return nums[mid];
};

console.log(findMin([5, 1, 2, 3, 4]) === 1);
console.log(findMin([3, 4, 5, 1, 2]) === 1);
console.log(findMin([4, 5, 6, 7, 0, 1, 2]) === 0);
console.log(findMin([11, 13, 15, 17]) === 11);
console.log(findMin([3, 1, 2]) === 1);
