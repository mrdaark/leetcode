/** https://leetcode.com/problems/partition-labels/ */

var partitionLabels = function (s) {
    const hash = new Map();
    for (let i = 0; i < s.length; i++) {
        hash.set(s.charAt(i), i);
    }
    let res = [];
    let size = 0;
    let end = 0;
    for (let i=0; i<s.length; i++) {
        size++;
        end = Math.max(end, hash.get(s.charAt(i)));
        if (i === end) {
            res.push(size);
            size = 0;
        }
    }
    return res;
};

console.log(partitionLabels('ababcbacadefegdehijhklij'));
