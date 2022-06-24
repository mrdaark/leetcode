/** https://leetcode.com/problems/merge-k-sorted-lists/ */

import {ll2Arr, arr2LL, ListNode} from '../tools/linked-lists.js';

const mergeKLists = function (lists) {
    if (!lists || lists.length === 0) return null;
    const head = new ListNode(0);
    let res = head;
    let p = 0;

    while (true) {
        for (let i = 0; i < lists.length; i++) {
            if (lists[p] === null || (lists[i] !== null && lists[p].val > lists[i].val)) {
                p = i;
            }
        }
        if (lists[p] === null) {
            break;
        }
        res.next = lists[p];
        res = res.next;
        lists[p] = lists[p].next;
    }
    return head.next;
};

const res = mergeKLists([[-8, -7, -6, -3, -2, -2, 0, 3], [-10, -6, -4, -4, -4, -2, -1, 4], [-10, -9, -8, -8, -6], [-10, 0, 4]].map(item => arr2LL(item)));

console.log('res', ll2Arr(res));
