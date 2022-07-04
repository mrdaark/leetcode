/** https://leetcode.com/problems/find-all-anagrams-in-a-string/ */

var findAnagrams = function (s, p) {
    // const pLen = p.length;
    // if (s.length < pLen) {
    //     return [];
    // }

    // const sortString = (s) => {
    //     return s.split('').sort((a, b) => (a > b) ? 1 : -1).join('');
    // }

    // p = sortString(p);

    // const res = [];
    // for (let i = 0; i + pLen <= s.length; i++) {
    //     if (p === sortString(s.slice(i, i + pLen))) {
    //         res.push(i);
    //     }
    // }

    // return res;

    const pLen = p.length;
    if (s.length < pLen) {
        return [];
    }

    const hashP = new Map();
    for (let i = 0; i < pLen; i++) {
        hashP.set(
            p[i],
            (hashP.get(p[i]) || 0) + 1,
        );
    }

    const hashS = new Map();

    const res = [];
    for (let i = 0; i + pLen <= s.length; i++) {
        console.log(s[i], (hashS.get(s[i]) || 0) + 1,)
        hashS.set(
            s[i],
            (hashS.get(s[i]) || 0) + 1,
        );

        if (i < pLen - 1) {
            continue;
        }
        let flag = true;
        hashS.forEach((value, key) => {
            if (hashP.get(key) !== value) {
                flag = false;
            }
        });
        if (flag === true) {
            res.push(i - pLen);
        }
        hashS.set(
            s[i - pLen],
            hashS.get(s[i - pLen]) - 1,
        );

    }

    return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));
// console.log(findAnagrams("abab", "ab"));
