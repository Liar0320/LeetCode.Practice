/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var left = [')','}',']'];
	var right = ['(','{','['];
	var result = [];
	var lastVal = null;
	var item,arr = s.split('');
	for(var i=0,ii=arr.length;i<ii;i++){
		item = arr[i];
		if(right.includes(item)){
			result.push(item);
			lastVal = item;
		}else if(lastVal !== right[left.indexOf(item)]){
			return false;
		}else{
			result.pop();
			lastVal = result[result.length - 1]
		}
	}
	return (result.length === 0);
};

