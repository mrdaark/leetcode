
/** https://leetcode.com/problems/sliding-window-median/ */
var medianSlidingWindow = function (nums, k) {
    const getMedian = (w) => {
        if (w.length % 2 == 1) {
            return quickselect(w, w.length / 2)
        } else {
            return 0.5 * (quickselect(w, w.length / 2 - 1) +
                quickselect(w, w.length / 2));
        }
    }

    const quickselect = (w, k) => {
        if (w.length === 1) {
            return w[0];
        }

        const pivot = w[Math.floor(Math.random() * w.length)];

        let lows = [];
        let highs = [];
        let pivots = [];
        for (let i = 0; i < w.length; i++) {
            if (w[i] > pivot) {
                highs.push(w[i]);
            } else if (w[i] < pivot) {
                lows.push(w[i]);
            } else {
                pivots.push(w[i])
            }
        }
        if (k < lows.length) {
            return quickselect(lows, k);
        } else if (k < lows.length + pivots.length) {
            return pivots[0];
        } else {
            return quickselect(highs, k - lows.length - pivots.length);
        }
    }

    const getMedian_nlogn = (w) => {
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
console.log(medianSlidingWindow([1, 4, 2, 3], 4))
