/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 * @description
 * 如果是负数 则不可能为回文
 * 从左 == 从右   ----> 其左右两边一样 
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let s = String(x);
    let len = s.length;
    // if(len ===1) return true;
    return s.substr(0,len/2) === s.split('').reverse().join('').substr(0,len/2);
};

