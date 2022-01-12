/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 * lich was
 * 如果存在
 *  获取 lastI = s.lastindexOf(' '); 
 *  如果 ' '的字符串后无单词 即 lastI == s.length;
 *      获取上一个 ' '空字符串往前找 。
 *          即 secI = s.lastindexOf('',lastI) ; 如果 不存在secI 。则return lastI;
 *          否则 lastI - secI -1;
 *      否则
 *         s.length - lastI 
 *  如果 lastI === -1  return s.length;
 * 如果不存在
 *  lastindexOf === -1 return 0;
 */
var lengthOfLastWord = function(s) {
    var result =  s.match(/\w+/g);
    if(result === null) return 0;
    return result.pop().length;
};

