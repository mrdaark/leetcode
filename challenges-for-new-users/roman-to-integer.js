/** https://leetcode.com/problems/roman-to-integer/ */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    const r2i = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let res = 0;

    const sp = s.split('')
    let i = sp.length - 1;

    while (i >= 0) {
        const prev = r2i[sp[i + 1]] || 0;
        const curr = r2i[sp[i]];
        if (prev > curr) {
            res -= curr;
        } else {
            res += curr;
        }
        i--;
    }

    return res;
};


console.log(romanToInt('MCMXCIV'));

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
