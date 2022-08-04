/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    if (s.length < 2) {
        return true;
    }

    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');;

    const mid = Math.ceil(s.length / 2) - 1;
    let left;
    let right;
    if (s.length % 2) {
        right = mid + 1;
        left = mid - 1;
    } else {
        right = mid + 1;
        left = mid;
    }

    while (left >= 0) {
        if (s[left] !== s[right]) {
            return false;
        }
        left--;
        right++;
    }
    return true;
};
