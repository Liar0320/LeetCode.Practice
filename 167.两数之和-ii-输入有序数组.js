/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const next = target - numbers[i];
        let next_index = numbers.indexOf(next,i+1) ;
        if( next_index !== -1){
            return [i+1,next_index+1];
        }
    }
    return [];
};

