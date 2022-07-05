// https://leetcode.com/problems/balanced-binary-tree/

var isBalanced = function (root) {

    let res = true;

    function getHeight(node) {
        if (!node) {
            return 0;
        }

        const left = getHeight(node.left);
        const right = getHeight(node.right);

        if (Math.abs(left - right) > 1) {
            res = false;
        }

        return Math.max(left, right) + 1;
    }

    getHeight(root);

    return res;
};
