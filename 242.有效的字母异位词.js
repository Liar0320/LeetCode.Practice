/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @description
 * 根据上一题的启发 只有小写字母的时候  将 26位字母 全部罗列 经过二次循环判断 如果 都成立条件 则 是字母异位词，  条件为 该字母的次数是否相等
    var allChar = 'abcdefghijklmnopqrstuvwxyz';
    var len = allChar.length - 1;
    var char;
    var reg;
    var resultS;
    var resultT;
    for(var i = 0 ; i < len ;i++){
        char = allChar.charAt(i);
        reg = new RegExp(char,'g');
        if((s.match(reg)||[]).length !== (t.match(reg)||[]).length) return false;
    }
    return true
 */
var isAnagram = function(s, t) {
    var r = {};
	var i ;
	s.split("").forEach(v=>{if(r[v.charCodeAt()] === undefined)r[v.charCodeAt()] = 0; r[v.charCodeAt()]++;});
	t.split("").forEach(v=>r[v.charCodeAt()]--);
	for( i in r){
		if(r[i] !== 0) return false;
	}
	return true; 
};

