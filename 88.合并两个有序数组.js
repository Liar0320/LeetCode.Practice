/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * @description
 * 因为两个数组都是有序的
 * A数组为参照对象
 * 将B数组的元素 依次插入 A数组
 * 直到B数组的长度为零
 * 找到一个比temp大的元素 插入其前面
 */
var merge = function(nums1, m, nums2, n) {
    var temp = 0,i = 0;
    nums1.length = m;
    nums2.length = n;
    while(nums2.length !== 0){
       temp = nums2.shift();
       while(nums1[i] < temp){
           i++
       }
        nums1.splice(i,0,temp);
    }
};

