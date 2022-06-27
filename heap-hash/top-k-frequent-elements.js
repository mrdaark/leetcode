/** https://leetcode.com/problems/top-k-frequent-elements/ */

var topKFrequent = function(nums, k) {
    const m = {};
    nums.forEach(item => {
        m[item] = (m[item] || 0) + 1;
    });

    return Object.entries(m).sort((a, b) => {
        return b[1] - a[1];
    }).slice(0, k).map(i => i[0]);

};

const nums = [1,1,1,2,2,3], k = 2;

console.log(topKFrequent(nums, k));
