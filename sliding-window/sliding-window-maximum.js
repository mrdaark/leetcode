/** https://leetcode.com/problems/sliding-window-maximum/ */

var maxSlidingWindow = function (nums, k) {
    let res = [];
    let prev = Math.max(...nums.slice(0, k))
    res.push(prev);
    for (let i = k; i < nums.length; i++) {
        if (nums[i - k] === prev) {
            if (prev <= nums[i]) {
                prev = nums[i]
            } else {
                prev = nums[i];
                for (let j = i; j > i - k; j--) {
                    if (nums[j] > prev) {
                        prev = nums[j];
                    }
                }
            }
        } else {
            prev = Math.max(prev, nums[i]);
        }
        res.push(prev);
    }
    return res;
};

// const maxSlidingWindow = (nums, k) => {
//     let maxes = [];
//     let q = [];
//     for (let last = 0, first = 1 - k; last < nums.length; last++, first++) {
//         while (q.length && nums[last] > q[q.length - 1]) {
//             q.pop();
//         }
//         q.push(nums[last]);
//         if (first < 0) {
//             continue;
//         }
//         maxes.push(q[0]);
//         if (nums[first] === q[0]) {
//             q.shift();
//         }
//     }
//     return maxes;
// }

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
