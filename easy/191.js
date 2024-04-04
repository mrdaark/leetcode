/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const bin = n.toString(2);
    let res = 0;

    for (let i = 0; i < bin.length; i++) {
        if (bin[i]==='1') {
            res++;
        }
    }

    return res;
};

// var hammingWeight = function (n) {
//     let res = 0;

//     while (n) {
//         res += n % 2;
//         n = n >> 1;
//     }

//     return res
// };

console.log(hammingWeight(2147483645));
