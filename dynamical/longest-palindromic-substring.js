// https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function (s) {
    let res = '';
    let resLen = 0;

    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > resLen) {
                resLen = right - left + 1;
                res = s.slice(left, right + 1);
            }
            left--;
            right++;
        }

        left = i;
        right = i + 1;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > resLen) {
                resLen = right - left + 1;
                res = s.slice(left, right + 1);
            }
            left--;
            right++;
        }
    }
    return res;
};

// console.log(Math.floor(3 / 2), 3 % 2);
// console.log(Math.floor(4 / 2), 4 % 2);
// console.log(Math.floor(1 / 2), 1 % 2);

console.log(longestPalindrome('babad') === 'bab');
console.log(longestPalindrome('cbbd') === 'bb');
