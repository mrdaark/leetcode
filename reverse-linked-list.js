import {arr2LL, ll2Arr, ListNode} from './tools/linked-lists.js';

var reverseList = function(head) {
    
    let prev = null;
    let next = null;
    let curr = head;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;

};

console.log(ll2Arr(reverseList(arr2LL([1,2,3,4,5,6,7,8,9,0]))));
