const mergeSegments = (arr) => {

    if (!arr || arr.length === 1) {
        return [];
    }

    arr.sort((a, b) => a[0] - b[0]);

    const res = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] <= arr[i - 1][1]) {
            res[res.length - 1][1] = Math.max(arr[i - 1][1], arr[i][1]);
        } else {
            res.push(arr[i]);
        }
    }

    return res;

}

console.log(mergeSegments([[1, 3], [100, 200], [2, 4]]));
