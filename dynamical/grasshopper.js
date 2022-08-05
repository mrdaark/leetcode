const count = (steps) => {
    const dp = [0, steps[0]];
    for (let i = 2; i <= steps.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2]) + steps[i - 1];
    }
    return dp[steps.length - 1];
}

console.log(count([1, 2, 4, -1, -5]));
