// https://leetcode.com/problems/same-tree/

var isSameTree = function(p, q) {

    let res = true;

    const compare = (node1, node2) => {

        if (!node1 && !node2) {
            return;
        }

        if (!node1 || !node2 || node1.val !== node2.val) {
            res = false;
            return;
        }

        compare(node1.left, node2.left);
        compare(node1.right, node2.right);
    }

    compare(p, q);

    return res;
};
