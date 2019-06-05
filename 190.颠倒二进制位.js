/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    if(!n) return n;
    n = fillZero(n.toString(2)).split('').reverse().join('');
    return parseInt(n,2);
};

function fillZero(nStr){
    var packStr = new Array(32-nStr.length).fill(0).join('');
    return packStr + nStr;
};

