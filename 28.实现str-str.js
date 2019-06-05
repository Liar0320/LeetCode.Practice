/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var reg = new RegExp(needle);
    var res = haystack.match(reg);
    if(needle === ''){
        return 0;
    }else{
        return res? res.index:-1
    }
};

