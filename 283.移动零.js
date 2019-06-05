/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(var i =  nums.length - 1; i > -1; i-- ){
		if(nums[i] === 0 ){
			nums.splice(i,1);
			nums.push(0);
		} 
         
	}
};

