// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {

    // if (s.length !== t.length) {
    //     return false;
    // }

    // s = s.split('').sort((a,b) => a>b ? 1 : -1).join('');
    // t = t.split('').sort((a,b) => a>b ? 1 : -1).join('');

    // return s === t;

    if (s.length !== t.length) {
        return false;
    }

    const hash = {};

    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = (hash[s[i]] || 0) + 1;
        hash[t[s.length - i - 1]] = (hash[t[s.length - i - 1]] || 0) - 1;

    }

    for (let char in hash) {
        if (hash[char]) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
