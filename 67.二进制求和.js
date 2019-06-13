/*
* @lc app=leetcode.cn id=67 lang=javascript
*
* [67] 二进制求和
*/
/**
* @param {string} a
* @param {string} b
* @return {string}
* 因为进位算法的存在，
* 所以创建一条进位线
* 递归增加 a,b 两条线 如果 大于2则进位到进位线中
* 当三条线中只有一条线有值或者三条线
* 从低位开始累加sum 根据规则 如果大于 2 则 sum - 2 且第三条线下一个为1 ， 否者等于 sum
* 当没有任何一个数时结束循环
*/
var addBinary = function(a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    var index = 0;
    var len = Math.max(a.length,b.length)+1;
    var c = new Array(len);
    var d = new Array(len);
    while(valid(index)){
        let count = sum(a[index],b[index],d[index]);
        if( count >= 2){
            c[index] = count - 2;
            d[index+1] = 1;
        }else{
            c[index] = count;
        }
        index++;
    }

    function sum(a,b,c) {
        return ((a||0)*1 + (b||0)*1 + (c||0)*1);
    }

    function valid(index) {
        var count = 0;
        if(a[index] != undefined) count++;
        if(b[index] != undefined) count++;
        if(d[index] != undefined) count++;
        return count > 0;
    }

    return c.reverse().join('');
};
    
    