/** https://leetcode.com/problems/binary-search/submissions/ */

function search(nums, target) {
    let left = 0;
    let right = nums.length;
    let mid;

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left;

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9));
