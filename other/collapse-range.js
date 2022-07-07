const collapse = (arr) => {
    arr.sort((a, b) => a - b);
    const res = [];
    const addToRes = (start, end) => {
        if (start === end) {
            res.push(start);
        } else {
            res.push(`${start}-${end}`);
        }
    }

    let start = arr[0];
    let end = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (end + 1 < arr[i]) {
            addToRes(start, end);
            start = arr[i];
        }
        end = arr[i];
    }
    addToRes(start, end);
    return res;
}

console.log(collapse([1, 4, 5, 2, 3, 9, 8, 11, 0]));
console.log(collapse([1, 4, 3, 2]));
console.log(collapse([1, 4]));
