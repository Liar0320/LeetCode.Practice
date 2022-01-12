/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        const first = nums[i];
        let temp_index = i+1;
        while (temp_index !== -1) {
            temp_index = nums.indexOf(first,temp_index);
            if(temp_index === -1) break;
            if(temp_index - i <= k) return true;
            temp_index++;
        }
      
        // for (let j = i+1,len = i+k+1; j < len; j++) {
        //     const second = nums[j];
        //     if(first === second) return true;
        // }
    }
    return false;
};

