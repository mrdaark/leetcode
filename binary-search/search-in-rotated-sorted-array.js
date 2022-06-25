/** https://leetcode.com/problems/search-in-rotated-sorted-array/ */

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[right] >= target && nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};


const nums = [4,5,6,7,0,1,2], target = 0;

console.log(search(nums, 0) === 4);
console.log(search(nums, 3) === -1);
console.log(search([1], 1) === 0);
console.log(search([1,3,5], 5) === 2)
