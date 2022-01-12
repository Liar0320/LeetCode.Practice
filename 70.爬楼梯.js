/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 * @description
 * 1 + 1
 * 2
 * 
 * 1 + 1 + 1
 * 2 + 1
 * 1 + 2
 * 
 * 1 + 1 + 1 + 1
 * 2 + 1 + 1
 * 1 + 2 + 1
 * 1 + 1 + 2
 * 2 + 2
 * 
 * 3--> 1 + 2
 * 4--> 2 + 3
 * 15--> 13 + 14
 * 
 * 由此总结 当一个数为 1或者2时  可以转化为  +1 +2;
 */
// var climbStairs = function(n) {
//     if(n === 0) return 0
//     if(n === 1) return 1
//     let temp = [1,2]
//     for(let i = 3; i <= n; i++){
//         temp.push(temp[0]+temp[1]);
//         temp.shift();
//     }
//     return temp[1];
// };


var climbStairs = function(n) {
    let keyRoutes = {
        0:0,
        1:1,
        2:2,
        3:3,
        4:5,
        5:8
    }
    for(let i = 0; i <= n; i++){
        if(keyRoutes[i] === undefined){
            keyRoutes[i] = keyRoutes[i-1]+keyRoutes[i-2];
        }
    }
    return keyRoutes[n];
};


