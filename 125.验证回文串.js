/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * 根据上体的思想 回文 前后位置上的 字母相同 即  将位置索引定为 key值 索引上的值 定位 value值   每次循环 进行两次计算 一次正向的 加 一次负向的减  当 当前值 不为 零时 则不是回文 
 * 简化 因为每次判断都进行 两次运算 所以 能不能 直接 用 一个 temp 零时值 去记录  每次循环 temp都复位
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     s = s.toLowerCase().match(/[a-zA-Z\d]/g)||'';
//     var l = s.length -1;
//     for(var i = 0;i<=l;i++){
//         if(s[i] !== s[l-i]) return false;
        
//     }
//     return true;
// };

/**
 * 根据上体的思想 回文 前后位置上的 字母相同 即  将位置索引定为 key值 索引上的值 定位 value值   每次循环 进行两次计算 一次正向的 加 一次负向的减  当 当前值 不为 零时 则不是回文 
 * 简化 因为每次判断都进行 两次运算 所以 能不能 直接 用 一个 temp 零时值 去记录  每次循环 temp都复位
  s = s.toLowerCase().match(/[a-zA-Z\d]/g)||'';
    var l = s.length -1;
    for(var i = 0;i<=l;i++){
        if(s[i] !== s[l-i]) return false;
        
    }
    return true;
 * 观看第一名记录 循环一半就可以了
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().match(/[a-zA-Z\d]/g)||'';
    var l = s.length;
    for(var i = 0;i<l;i++){
        if(s[i] !== s[--l]) return false;
        
    }
    return true;
};
/*
  var len = s.length;
    var temp ;
    var char ;
    var reg = new RegExp(/[a-zA-Z\d]/);
    var j;
    for(var i = 0 ; i< len ; i++){
        char = s.charAt(i);
         j =  -1;
        while(!char.match(reg)&&j<len){
            j !== -1 ? j++ : (j = i);
            char = s.charAt(j);
            console.log(j,char.match(reg),5);
        }
        if(char.match(reg)) temp = char;
        char = s.charAt(len-1 - i);
        j = len -1;
        while(!char.match(reg)&&j>=0){
            j !== -1 ? j-- : (j = i);
            char = s.charAt(j);
            console.log(j,char.match(reg),3);
        }
        if(temp.toLowerCase() !== char.toLowerCase()) return false
    }
    
    return true;
    */

