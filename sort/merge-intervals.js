var merge = function (intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    // const res = [intervals[0]];
    // for (let i = 1; i < intervals.length; i++) {
    //     let flag = true;
    //     for (let j = 0; j < res.length; j++) {
    //         if (res[j][0] <= intervals[i][0] && res[j][1] >= intervals[i][0]) {
    //             res[j][1] = Math.max(intervals[i][1], res[j][1]);
    //             flag = false;
    //             break;
    //         } else if (res[j][0] <= intervals[i][1] && res[j][1] >= intervals[i][1]) {
    //             res[j][0] = Math.min(intervals[i][0], res[j][0]);
    //             flag = false;
    //             break;
    //         } else if (intervals[i][0] <= res[j][0] && intervals[i][1] >= res[j][1]) {
    //             res[j][0] = intervals[i][0];
    //             res[j][1] = intervals[i][1];
    //             flag = false;
    //             break;
    //         } else if (res[j][0] <= intervals[i][0] && res[j][1] >= intervals[i][1]) {
    //             flag = false;
    //             break;
    //         }
    //     }
    //     if (flag) {
    //         res.push(intervals[i]);
    //     }
    // }
    // return res;

    const res = [];
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i += 1) {
        if (prev[1] >= intervals[i][0]) {
            prev = [prev[0], Math.max(prev[1], intervals[i][1])];
        } else {
            res.push(prev);
            prev = intervals[i];
        }
    }

    res.push(prev);

    return res;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,4],[0,5]]));
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]));
