/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(element === val) {
            nums.splice(index,1);
            index--;
        }
    }
    return nums.length;
};
// var removeElement = function(nums, val) {
//     for (let index = 0; index < nums.length; index++) {
//         const element = nums[index];
//         if(element === val) {
//             var temp = nums[index];
//             // nums[index] = null;
//             var l =  getVal(val);
//             nums[l[1]] = temp;
//             nums[index] = l[0];
//         }
//         return nums;
//     }

//     function getVal(val) {
//         var len = nums.length -1 ;
//         while (nums[len] === val) {
//             len--;
//         }
//         return [nums[len],len];
//     }

//     return nums;
// };

