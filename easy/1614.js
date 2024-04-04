/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {

    if (!s) {
        return 0;
    }

    let max = 0;
    let current = 0;

    for (let i = 0; i < s.length; i++) {
        const l = s[i];

        if (l === '(') {
            current++;

            if (current > max) {
                max = current;
            }
        }

        if (l === ')') {
            if (current === 0) {
                return false;
            }
            current--;
        }
    }

    return max;
};

console.log(maxDepth('(1+(2*3)+((8)/4))+1'))
