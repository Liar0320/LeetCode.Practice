/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function(s) {
//     const rules = {
//         I:1,
//         V:5,
//         X:10,
//         L:50,
//         C:100,
//         D:500,
//         M:1000
//     }
//     const special = ['I','X','C'];
//     let o = s.split(''),n = o.length; i = 0,current = 0 ,next = 0 , result = 0;
//     for(i; i < n ;i++){
//         current = rules[o[i]]
//         if(special.includes(o[i])){
//             next = rules[o[i+1]];
//             if(next > current) {
//                 current = next - current ;
//                 i++;
//             }
//         }
  
//         result += current;
//     }
//     return result ;
// };

/**
 * 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const rules = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    const special = ['I','X','C'];
    let o = s.split(''),n = o.length; i = 0,current = 0 , result = 0;
    for(i; i < n ;i++){
        current = rules[o[i]]
        if(current < (rules[o[i+1]] || 0)){
           result -= current;
        }else{
           result += current;
        }
    }
    return result ;
};


