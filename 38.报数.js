/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
// var countAndSay = function(n) {
//     var result = '1';
//     n = n-1;
//     for(var i = 0; i< n;i++){
//         result = sort(result.split(''));
//     }
        
//     function sort(str){
//         var count = 0;
//         while(str[count] === str[count+1]){
//             count++;
//         }
//         var result = (count+1)+''+ str[count];
//         if(str.length === count+1) {
//             return result;
//         }else{
//             result += sort(str.splice(count+1))
//         }
//         return result;
//     }
//     return result
// };

var countAndSay = function(n) {
    var result = '1';
    n = n-1;
    for(var i = 0; i< n;i++){
        result = sort(result.split(''));
    }
        
    function sort(str){
        var count = 0;
        while(str[count] === str[count+1]){
            count++;
        }
        var result = (count+1)+''+ str[count];
        if(str.length === count+1) {
            return result;
        }else{
            result += sort(str.splice(count+1))
        }
        return result;
    }
    return result;
};

