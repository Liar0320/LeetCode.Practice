/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var min = power(-2,31);
    var max = power(2,31)
    if(x>0){
        var num = (x+'').split('').reverse().join('')*1;
    }else{
        x = x*-1;
        var num = (x+'').split('').reverse().join('')*-1;
       
    }
    
    function power(val , len){
        var origin = val;
        for(var i = 0; i<len-1;i++){
            val = val*origin
        }
        return val;
    }
    
    return (min<num&&num<max) ? num : 0;
};

// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function(x) {
//     var min = power(-2,31);
//     var max = power(2,31)
//     if(x>0){
//         var num = (x+'').split('').reverse().join('')*1;
//        return (min<num&&num<max) ? num : 0;
//     }else{
//         x = x*-1;
//         var num = (x+'').split('').reverse().join('')*-1;
//        return (min<num&&num<max) ? num : 0;
//     }
    
//     function power(val , len){
//         var origin = val;
//         for(var i = 0; i<len-1;i++){
//             val = val*origin
//         }
//         return val;
//     }
    
// };

