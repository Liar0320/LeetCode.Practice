/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 * 将A-Z存在对象中
 * 以26作为进制
 */
var titleToNumber = function(s) {
    return s.split('').reverse()
        .reduce((prev,item,index)=>{
            let base = Math.pow(len,index);
            if(base === 1) return AZMAP[item] ;
            return prev + base*AZMAP[item];
        },0);
};
const AZMAP = (()=>{
    let min = 'A'.charCodeAt();
    let max = 'Z'.charCodeAt() + 1;
    let result = {};
    for (let index = min; index < max; index++) {
        result[String.fromCharCode(index)] = index - min + 1;
    }
    return result;
})();
let len = Object.keys(AZMAP).length;


