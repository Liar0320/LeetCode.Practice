/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var list = new Array(nums.length).fill(0);
    nums.forEach(item=>{
        list[item] = 1;
    })
    var result =  list.indexOf(0);
    return result > -1 ? result:list.length;
};

