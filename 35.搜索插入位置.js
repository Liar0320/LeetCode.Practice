/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if(element < target){
            continue;
        }else if(element === target){
            return index;
        }else if( element > target){
            return index;
        }
    }
    return nums.length;
};

