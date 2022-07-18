// https://github.com/Tinkoff/career/blob/main/interview/sections/programming.md

const find = (a, b, c) => {

    let res = [];

    let ai = 0, bi = 0, ci = 0;

    while (ai < a.length && bi < b.length && ci < c.length) {
        if (a[ai] === b[bi] && b[bi] == c[ci]) {
            res.push(a[ai]);
            ai++;
            bi++;
            ci++;
        } else if (a[ai] < b[bi]) {
            ai++;
        } else if (b[bi] < c[ci]) {
            bi++;
        } else {
            ci++
        }
    }

    return res;

}

console.log(find([1, 2, 4, 5], [3, 4, 5], [2, 3, 4, 5, 6]));
