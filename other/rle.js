const rle = (s) => {
    if (s.length < 2) {
        return s;
    }
    const res = [];
    let prev = s[0];
    let count = 1;
    for (let i = 1; i <= s.length; i++) {
        if (s[i] !== prev) {
            res.push(prev);
            if (count > 1) {
                res.push(count);
            }
            count = 0;
            prev = s[i];
        }
        count++;
    }
    return res.join('');
}

console.log(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'));
