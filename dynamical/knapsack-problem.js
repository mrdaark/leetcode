var solveKnapSackProblem = function (goods, capacity) {
    const dp = [];
    for (let i = 0; i <= goods.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= capacity; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else {
                if (goods[i - 1][0] > j) {
                    dp[i][j] = dp[i - 1][j];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], goods[i - 1][1] + dp[i - 1][j - goods[i - 1][0]])
                }
            }

        }
    }
    return dp[goods.length][capacity];
}

console.log(solve([[6, 5], [4, 3], [3, 1], [2, 3], [5, 6]], 15) === 14);
