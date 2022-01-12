/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var temp = 0;
    for(let i =0;i<nums.length;i++){
        while(nums[i+1]===nums[i]){
             i++;
        }
        nums[temp] = nums[i];
        temp++;
    }
    nums.length = temp;
};

