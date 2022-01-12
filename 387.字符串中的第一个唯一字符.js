/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var obj = {}
    for(var i = 0 ; i<s.length - 1 ; i++){
        var char = s.charAt(i);
        if(!obj[char]&&!s.includes(char,i+1)){
             return i
        }else{
            obj[char] = true
        }
    }
    if((s.length ===1)) return 0;
    
    return (s!=='')&&(s.match(new RegExp(s.charAt(i),'g')).length === 1)? i:-1
};

