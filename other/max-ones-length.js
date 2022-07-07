const maxOnesLength = (arr) => {
    let max = 0;
    let curr = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            curr++;
        } else {
            if (arr[i + 1]) {
                let j = i + 1;
                while (arr[j] && j < arr.length) {
                    curr++;
                    j++;
                }
            }
            max = Math.max(curr, max);
            curr = 0;
        }
    }
    return max;
}

console.log(maxOnesLength([0, 0, 1, 1, 0, 1, 0, 1, 1, 1]));
console.log(maxOnesLength([1, 1, 0]));
