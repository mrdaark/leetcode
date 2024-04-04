/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    if (num.length < 3) {

        return '';
    }

    let str = num[0];
    let lastLetter = num[0];

    const strs = [];

    for (let i = 1; i < num.length; i++) {
        if (lastLetter !== num[i]) {
            if (str.length >= 3)  {
                strs.push(lastLetter);
            }

            str = '';
        }
        lastLetter = num[i];
        str += num[i];
    }

    if (str.length>=3) {
        strs.push(lastLetter);
    }

    const max = Math.max(...strs);

    return strs.length ? String(max).repeat(3) : ''
};

console.log(largestGoodInteger('6777133339') === '777')
console.log(largestGoodInteger('2300019') === '000')
console.log(largestGoodInteger('42352338') === '')
console.log(largestGoodInteger('222') === '222')
console.log(largestGoodInteger('74444') === '444')
console.log(largestGoodInteger('3200014888') === '888')
console.log(largestGoodInteger('4818042931906802860005960222213336669500011846936171709111') === '666')


