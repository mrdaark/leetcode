import {arr2LL, ll2Arr, ListNode} from './tools/linked-lists.js';

var addTwoNumbers = function (l1, l2) {
    const head = new ListNode(0);
    let p = 0;
    let temp = head;

    while (l1 !== null || l2 !== null) {
        temp.next = new ListNode((l1?.val || 0) + (l2?.val || 0) + p);
        p = Math.floor( temp.next.val / 10);
        if (p > 0) {
            temp.next.val = temp.next.val % 10;
        }
        temp = temp.next;
        l1 = l1?.next || null;
        l2 = l2?.next || null;
    }
    if (p !== 0) {
        temp.next = new ListNode(p);
    }

    return head.next;
};


const ll1 = arr2LL([9, 9, 3]);
const ll2 = arr2LL([9, 9, 9, 9, 9, 1]);

console.log(ll2Arr(addTwoNumbers(ll1, ll2)));

