var maxProfit = function (prices, fee) {
    let profit = 0;
    let eff = prices[0];

    for (let i = 0; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - eff - fee);
        eff = Math.min(eff, prices[i] - profit);
    }
    return profit;
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));
