export class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export const arr2LL = (arr) => arr.slice().reverse().reduce((res, item) => {
    return new ListNode(item, res)
}, null);

export const ll2Arr = (list) => {
    const res = [];
    while (list) {
        res.push(list.val);
        list = list.next;
    }
    return res;
}

export const getTail = (list) => {
    let temp = list;
    let prev = null

    while (temp) {
        prev = temp;
        temp = temp.next
    }

    return prev;
}
