// https://leetcode.com/problems/path-sum-ii/

var pathSum = function (root, targetSum) {
    const res = [];
    const getSum = (node, nums, sum) => {
        if (!node) {
            return;
        }

        nums = nums.concat(node.val);
        sum += node.val;

        if (!node.left && !node.right && sum === targetSum) {
            res.push(nums);
        }
        getSum(node.left, nums, sum);
        getSum(node.right, nums, sum);
    }

    getSum(root, [], 0);

    return res;
};
