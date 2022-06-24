import {arr2LL, getTail} from './tools/linked-lists.js';

const hasCycle = function (head) {

    while (head) {
        head.flag = true;
        head = head.next;

        if (head && head.flag) {
            return true;
        }
    }

    return false;

};


const list = arr2LL([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

getTail(list).next = list.next.next

console.log(
    hasCycle(list)
)
