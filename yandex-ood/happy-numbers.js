


const findAll = function (n, k) {
    const isHappy = function (narr, n) {
        let sum = narr[0];

        for (let i = 1; i < narr.length; i++) {
            if (sum > n) {
                return false;
            }
            if (narr[i - 1] <= narr[i]) {
                sum += narr[i];
            } else {
                return false;
            }
        }
        return sum === n;
    };

    let count = 0;
    let min;
    let max;

    const maxNum = Math.pow(10, k) - 1;
    let counter = new Array(k).fill(1);
    let i = Number(counter.join(''));
    let iter = 0;

    while (i <= maxNum) {
        iter++;
        const flag = isHappy(counter, n)
        if (flag === true) {
            count++;
            if (!min) {
                min = i;
            }
            max = i;
        }
        counter[k - 1] += 1;
        let ff = counter[0];
        for (let j = k - 1; j >= 0; j--) {
            if (counter[j] < counter[j - 1]) {
                counter[j] = counter[j - 1];
            } else if (counter[j] === 10) {
                counter[j] = counter[j - 1];
                counter[j - 1] += 1;


                for (let z = j - 1; z < k; z++) {
                    counter[z] = counter[j - 1];
                }

            }
        }
        i = Number(counter.join(''));
        if (counter[0] !== ff && counter.reduce((res, i) => res+=i, 0) > n) {
            break;
        }
    }

    console.log(iter);
    if (!count) {
        return [count];
    }

    return [count, String(min), String(max)];
}

console.log(findAll(10, 3)); // [8, 118, 334]
// console.log(findAll(27, 3)); // [1, 999, 999]
// console.log(findAll(28, 3)); // [0]
