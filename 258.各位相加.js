/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var temp =  num;
    while(temp >= 10){
        temp =  temp.toString().split('').reduce((prev,item)=>(prev+Number(item)),0);
    }
    return temp;
};

