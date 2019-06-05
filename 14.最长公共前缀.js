/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 * @description
 * 最长公前缀  可优化
 * 因为数组不太好处理 需要循环 所以考虑 变成字符串 用正则去匹配  (','+["flower","flow","flight"].join()).match(/,flo/g)
 */
var longestCommonPrefix = function(strs) {
    if(strs.length ===0 ) return "";  
	var el = strs[0];               //1、提取第一位单词 作为基准
	var s = "," + strs.join(",");   //2、创建总的字符串 s
	var l = strs.length;            //3、创建数组长度
	var r = "";                     //4、匹配参数 r
	var i = 0;                      //5、创建一个 i = 0 的计数变量
	while(s.match(new RegExp(","+ r,"g")).length === l){
		i++;
		if(r === el) break;
		r = el.substring(0,i);
	}
	return el.substring(0,i-1);
};

