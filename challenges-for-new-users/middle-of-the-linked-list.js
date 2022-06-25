/** https://leetcode.com/problems/middle-of-the-linked-list/ */

import {arr2LL} from '../tools/linked-lists.js'

var middleNode = function(head) {
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};

console.log('res:', middleNode(arr2LL([1,2,3,4,5,6,7])));
