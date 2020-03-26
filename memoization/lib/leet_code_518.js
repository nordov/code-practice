// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

function coinChange(coins, amount, memo = { 0: 0 }) {

    if (amount in memo) return memo[amount];

    let totalCoins = [];

    coins.forEach(coin => {
        if (coin <= amount)
            totalCoins.push(coinChange(coins, amount - coin, memo) + 1);
    });

    memo[amount] = totalCoins.length;

    return memo[amount];
}

console.log(coinChange([1,2,5], 5));
console.log(coinChange([2], 3));
console.log(coinChange([10], 10));