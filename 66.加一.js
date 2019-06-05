
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length - 1;
    digits[len] = digits[len]*1+1
    while(digits[len]*1 === 10 && (( len -= 1 ) > -1)){
        digits[len + 1] = 0
        digits[len] =  digits[len]*1 + 1;
    }
    if(len === -1) {
        digits[0] = 0;
        digits.unshift(1);
    }
    
    return digits;
};

