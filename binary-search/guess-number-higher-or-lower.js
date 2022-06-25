/** https://leetcode.com/problems/guess-number-higher-or-lower/ */

const pick = 6;

var guess = function (num) {
    if (num === pick) {
        return 0
    } else if (num > pick) {
        return -1;
    } else {
        return 1;
    }
}

var guessNumber = function (n) {
    let left = 0;
    let right = n;
    let res = Math.round(n / 2);

    while (left < right) {
        switch (guess(res)) {
            case 0:
                return res;
            case 1:
                left = res + 1;
                break;
            case -1:
                right = res - 1;
                break;

        }
        res = Math.round((right - left) / 2) + left;
    }

    return res;
};

console.log(guessNumber(10));
