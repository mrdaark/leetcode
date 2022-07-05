/** https://leetcode.com/problems/symmetric-tree/ */

var isSymmetric = function (root) {
    let res = true;

    const compare = (node1, node2) => {
        if (!node1 && !node2) {
            return;
        }
        if (!node1 || !node2 || node1.val !== node2.val) {
            res = false;
            return;
        }

        compare(node1.left, node2.right);
        compare(node2.left, node1.right);
    }

    compare(root.left, root.right);

    return res;
};


// class TreeNode {
//     constructor(val, left, right) {
//         this.val = (val === undefined ? 0 : val);
//         this.left = (left === undefined ? null : left);
//         this.right = (right === undefined ? null : right);
//     }
// }

// const arr = [1,2,2,3,4,4,3];

// const root = new TreeNode(arr[0]);
// for (let i = 1; i < arr.length; i++) {
//     roo
// }
