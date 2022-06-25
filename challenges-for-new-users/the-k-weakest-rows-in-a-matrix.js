/** https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/ */

var kWeakestRows = function (mat, k) {
    const oneCounts = mat.map((item, index) => {
        return [index, item.reduce((r, i) => r + i, 0)];
    });

    return oneCounts
        .sort((a, b) => {
            const diff = a[1] - b[1];
            if (diff === 0) {
                return a[0] - b[0]
            }
            return diff;
        })
        .map(i => i[0])
        .slice(0, k);
};

const mat =
    [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]];
const k = 3;

console.log(kWeakestRows(mat, k));
