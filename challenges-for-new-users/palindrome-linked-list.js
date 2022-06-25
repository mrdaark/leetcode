/** https://leetcode.com/problems/palindrome-linked-list/ */

import {arr2LL} from '../tools/linked-lists.js'

var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    const halfArr = [];

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        halfArr.push(slow.val);
        slow = slow.next;
    }

    if (fast !== null) {
        slow = slow.next;
    }

    let i = halfArr.length - 1;

    while (i >= 0) {
        if (halfArr[i] !== slow.val) {
            return false;
        }
        i--;
        slow = slow.next;
    }
    return true;
};

console.log('res:', isPalindrome(arr2LL([1, 2, 3, 4, 5, 6, 1, 4, 3, 2, 1])));
