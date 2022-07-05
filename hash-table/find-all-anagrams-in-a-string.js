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

    if (p.length > s.length) {
        return [];
    }

    const compareHash = (pCount, sCount, p) => {
        for (let i = 0; i < p.length; i++) {
            if (pCount[p[i]] !== sCount[p[i]]) {
                return false;
            }
        }
        return true;
    }

    const pLen = p.length;
    const pCount = {};
    const sCount = {};
    for (let i = 0; i < pLen; i++) {
        pCount[p[i]] = (pCount[p[i]] || 0) + 1;
        sCount[s[i]] = (sCount[s[i]] || 0) + 1;
    }

    const res = [];
    for (let i = pLen; i <= s.length; i++) {
        if (compareHash(pCount, sCount, p)) {
            res.push(i - pLen);
        }
        sCount[s[i - pLen]] -= 1;
        sCount[s[i]] = (sCount[s[i]] || 0) + 1;
    }

    return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
