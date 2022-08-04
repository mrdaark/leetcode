function binarySearch(nums, target) {
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
    return left;
};


var lengthOfLIS = function (nums) {
    // const n = nums.length;
    // const dp = [];

    // for (let i = 0; i < n; i++) {
    //     dp[i] = 1;
    //     for (let j = 0; j < i; j++) {
    //         if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) {
    //             dp[i] = dp[j] + 1;
    //         }

    //     }
    // }
    // return Math.max(...dp);

    const n = nums.length;
    const dp = []
    for (let i = 0; i < n; i++) {
        if (dp.length === 0 || dp[dp.length - 1] < nums[i]) {
            dp.push(nums[i]);
        } else {
            dp[binarySearch(dp, nums[i])] = nums[i];
        }
    }
    return dp.length
};


console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]) === 6);
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]) === 4);
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]) === 4);
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]) === 1);
