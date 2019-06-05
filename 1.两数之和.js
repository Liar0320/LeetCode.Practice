/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var temp = {};
	var len = nums.length;
	var dseTarget ;
	for(var i = 0; i<len;i++){
		dseTarget = target - nums[i];
		if(dseTarget in temp){
			return [i,temp[dseTarget]];
		}else{
			temp[nums[i]] = i;
		}

	}
};

