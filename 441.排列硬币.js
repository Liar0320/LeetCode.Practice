/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */
/**
 * @param {number} n
 * @return {number}
 * 不断的尝试直到找到一个  a<n<b的数 a就是返回值
 */
var arrangeCoins = function(n) {
    var min = 0;
    while (n>=sum(1,min)) {
        min++;
    }
    return min-1;
};

function sum(a,b){
    return (a+b)*(b)/2;
}
// function reduce(b) {
//     return 2n = b + b^2
// }

