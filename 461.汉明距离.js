/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var max ,min;
    if(x > y){
        max = x;
        min = y;
    }else{
        max = y;
        min = x;
    }
     max = max.toString(2).split('').reverse();
     min = min.toString(2).split('').reverse();
   return max.filter((item,index)=>{
       if(min[index]){
           return min[index] != item;
       }else{
           return item == 1
       }   
   }).length;
};

