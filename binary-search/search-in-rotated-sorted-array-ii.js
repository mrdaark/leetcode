/** https://leetcode.com/problems/search-in-rotated-sorted-array-ii/ */

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;

        if (nums[mid] === target) {
            return true;
        }

        if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
            while (nums[mid] === nums[left] && mid > left) {
                left++;
            }
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
    return false;
};

const nums = [2, 5, 6, 0, 0, 1, 2];
console.log(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2) === true);
console.log(search([1, 0, 1, 1, 1], 0) === true);
console.log(search(nums, 0) === true);
console.log(search(nums, 3) === false);
console.log(search([2,2,2,0,1], 0) === true);
