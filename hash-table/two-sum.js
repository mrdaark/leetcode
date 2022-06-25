/** https://leetcode.com/problems/two-sum/ */

var twoSum = function (nums, target) {
    // const sortedNums = nums.slice().sort((a, b) => a - b);
    // let left = 0;
    // let rigth = sortedNums.length - 1;
    // let res;

    // while (left <= rigth) {
    //     const sum = sortedNums[left] + sortedNums[rigth];
    //     if (sum === target) {
    //         res = [sortedNums[left], sortedNums[rigth]];
    //         break;
    //     } else if (sum > target) {
    //         rigth--;
    //     } else {
    //         left++
    //     }
    // }
    // res.sort();
    // const i1 = nums.indexOf(res[0]);
    // return [i1, res[0] === res[1] ? nums.indexOf(res[1], i1 + 1) : nums.indexOf(res[1])];

    const hashNumberIndex = {};
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in hashNumberIndex) {
            return [hashNumberIndex[target - nums[i]], i];
        } else {
            hashNumberIndex[nums[i]] = i;
        }
    }
    return []
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
console.log(twoSum([5, 75, 25], 100));
