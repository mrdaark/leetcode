/** https://leetcode.com/problems/fizz-buzz/ */

var fizzBuzz = function (n) {
    const arr = new Array(n);
    for (let index = 0; index < n; index++) {
        console.log(index);
        const i = index + 1;

        let res = '';

        if (i % 3 === 0) {
            res += 'Fizz';
        }

        if (i % 5 === 0) {
            res += 'Buzz';
        }
        arr[index] = res || i.toString();
    }
    return arr;
};

console.log(fizzBuzz(15))
