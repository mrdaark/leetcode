var reverseWords = function (s) {
    // return s.split(' ').filter(i => !!i).reverse().join(' ');
    let res = '';
    let word = '';
    for (let i = 0; i < s.length; i++) {

        if (s[i] !== ' ') {
            word += s[i];
        } else if (word.length !== 0) {
            res = word + ' ' + res;
            word = '';
        }
    }

    if (word.length !== 0) {
        res = word + ' ' + res;
        word = '';
    }

    return res.slice(0,-1);
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('  hello world  '));
console.log(reverseWords('a good   example'));
