/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 * 方案一: 合并两个数组， 数组排序  获取中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [...nums1, ...nums2].sort((a,b)=>a-b);
  let len = nums.length;
  if(len === 0) return 0;
  return len % 2 === 1
    ? nums[(len - 1) / 2]
    : (nums[len / 2 - 1] + nums[len / 2]) / 2;
};
// @lc code=end
