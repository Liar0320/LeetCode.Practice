/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var s = parseInt(str)||0;
	return s < -2147483648 ? -2147483648 : s>2147483647 ? 2147483647:s;
};

// var myAtoi = function(str) {
// 	var s = (str.match(/^\s*([-+]?)(\d+)/)||[])[0] *1;
// 	if(!s)return 0;
// 	return s < -2147483648 ? -2147483648 : s>2147483647 ? 2147483647:s;
// };

// var myAtoi = function(str) {
// 	var s = (str.replace(/^\s+/,"").match(/^[-+]?\d+/)||[])[0] *1 || 0;
// 	return s < -2147483648 ? -2147483648 : s>2147483647 ? 2147483647:s;
// };

// var myAtoi = function(str) {
// 	var s = (str.replace(/^\s+/,"").match(/^[-+]?\d+/)||[])[0] *1;
// 	if(!s)return 0;
// 	let min = Math.pow(-2,31) ;
// 	let max = Math.pow(2,31) -1;
// 	return s < min ? min : s>max ? max:s;
// };

