/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let resultCicle = {
        "U":0,
        "D":0,
        "L":0,
        "R":0
    };
    moves.split('').forEach(item=>resultCicle[item]++);
    
    return (resultCicle.U - resultCicle.D === 0 ) &&
           (resultCicle.L - resultCicle.R === 0 );

};

