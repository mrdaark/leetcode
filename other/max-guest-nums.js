const maxGuestNums = (arr) => {

    const arriving = {};
    const leaving = {};
    const days = new Set();

    for (let i = 0; i < arr.length; i++) {
        arriving[arr[i][0]] = (arriving[arr[i][0]] || 0) + 1;
        leaving[arr[i][1]] = (leaving[arr[i][1]] || 0) + 1;
        days.add(arr[i][0]);
        days.add(arr[i][1]);
    }

    let res = 0;
    let curr = 0;
    let prev = 0;

    const daysArr = Array.from(days).sort((a, b) => a - b);

    for (let i = 0; i < daysArr.length; i++) {
        curr += (arriving[daysArr[i]] || 0);
        curr -= (leaving[daysArr[i]] || 0);
        if (curr > res) {
            res = curr;
        }
    }
    return res;
}

console.log(maxGuestNums([[2, 3], [1, 2], [1, 3], [2, 4]]));
