/** https://leetcode.com/problems/top-k-frequent-words/ */

var topKFrequent = function (words, k) {
    const m = {};
    words.forEach(item => {
        m[item] = (m[item] || 0) + 1;
    });

    return Object.entries(m).sort((a, b) => {
        const diff = b[1] - a[1];
        if (diff) {
            return diff;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        if (a[0] < b[0]) {
            return -1;
        }
        return 0;
    }).slice(0, k).map(i => i[0]);


    // const m = new Map();
    // words.forEach(item => {
    //     m.set(item, (m.get(item) || 0) + 1);
    // });
    
    // return Array.from(m.entries()).sort((a, b) => {
    //     const diff = b[1] - a[1];
    //     if (diff) {
    //         return diff;
    //     }
    //     if (a[0] > b[0]) {
    //         return 1;
    //     }
    //     if (a[0] < b[0]) {
    //         return -1;
    //     }
    //     return 0;
    // }).slice(0, k).map(i => i[0]);

};

const words = ["i", "love", "leetcode", "i", "love", "coding"], k = 3

console.log(topKFrequent(words, k));

