/** https://leetcode.com/problems/ransom-note/ */

var canConstruct = function(ransomNote, magazine) {
    const m = magazine.split('').reduce((res, letter) => {
        res.set(letter, (res.get(letter) ?? 0) + 1);
        return res;
    }, new Map());
    const r = ransomNote.split('');
    let i = 0;
    while (i < r.length) {
        if (!m.get(r[i])) {
            return false;
        }
        m.set(r[i], m.get(r[i]) - 1);
        i++;
    }
    return true;
};

console.log(canConstruct('aaab', 'aab'));
