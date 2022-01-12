/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 *
 * 从原始办法上来说
 * 我从第一位开始查找，找到第i和j位 冲突 则可得到 j长度位不重复的  i->未知     
 * 分析 每一次的冲突之后的解决方案都是一样的            
 * 基线条件  len-i < max
 * 递归条件  recursive(str,result)
 */
var lengthOfLongestSubstring = function (s) {
  return recursive(s, 0);
};

function compare(str) {
  let charHas = new Map();
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (charHas.has(element)) {
      return [charHas.get(element), i];
    } else {
      charHas.set(element, i);
    }
  }
  return [0, str.length];
}

function recursive(str, result) {
  let str_len = str.length;
  let [i, j] = compare(str);
  result = Math.max(j, result);


  /**基础条件 */
  if (str_len - i <= result) {
    return result;
  } else {
    return recursive(str.slice(i+1), result);
  }
}
