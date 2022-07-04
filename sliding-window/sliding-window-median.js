
/** https://leetcode.com/problems/sliding-window-median/ */
var medianSlidingWindow = function (nums, k) {

    const getMedian = (w) => {
        w.sort((a, b) => a - b);
        if (w.length % 2 === 1) {
            return w[Math.floor(w.length / 2)];
        } else {
            return (w[w.length / 2 - 1] + w[w.length / 2]) / 2;
        }
    }

    const res = [];
    for (let i = 0; i + k <= nums.length; i++) {
        res.push(getMedian(nums.slice(i, i + k)));
    }

    return res.map(i => i.toFixed(4));
};

console.log(medianSlidingWindow([1, 2, 3, 4, 2, 3, 1, 4, 2], 3));
console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

