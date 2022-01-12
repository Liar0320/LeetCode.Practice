/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 * @description
 *  dayMax  当天最贵值;
 * 如果从最后一天开始计算
 * 往前计算利润 如果当dayMax - 当前天 利润最大 则 赋予 max；
 */
var maxProfit = function(prices) {
    var dayMax = 0,max = 0, i =  prices.length - 1;
    for(i;i >= 0;i--){
        dayMax = Math.max(dayMax,prices[i]);
        max = Math.max(max,dayMax - prices[i]);
    }
    return max;
};

