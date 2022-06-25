/** https://leetcode.com/problems/single-number/ */

var singleNumber = function (nums) {
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};

console.log(singleNumber([2, 2, 1]) === 1);
console.log(singleNumber([4, 1, 2, 1, 2]) === 4);
console.log(singleNumber([1,1,0]) === 0);
