/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */
/**
 * @param {number} num
 * @return {boolean}
 * 定义一个容器 用来存储符合4的幂次放的对象  当有 
 */
var isPowerOfFour = function(num) {
    if(store[num] || num === 1) return true;
    var temp = 4;
    while (num>=temp) {
        if(num === temp) {
            store[temp] = true;
            return true;
        }
        temp = temp * 4;
    }
    return false;
};

var store = {};


