/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    while (nums.length > 1) {
       if(nums.indexOf(nums.shift())>-1) return true;
    }
    return false;
};

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     let distinct = [];
//     for(let item of nums){
//         if(distinct.indexOf(item)>-1) return true;
//         distinct.push(item);
//     }
//     return false;
// };

