/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 * @description
 * 最简单的思考
 *      俩个条件 第一为连续数组 第二为最大
 *   所以 
 *      当所有数为正数 都全部相加时最大
 * 类似 求最大回文
 *      定义一个compare方法。 比较当前最大值 和 计算最大值; 获取最大计算值 作为下一次计算使用
 *      直到len = 1;
 */
// var maxSubArray = function(nums) {
//     var len = nums.length ;
//     const l = len;
//     var max = nums[0];
//     var i ;
//     var tempA = [];
    
//     while(len !== 0){
//         i = 0;
//         while(i + len <= l){
//             tempA.push(nums.slice(i,i+len).reduce(addSum));
//             i++;
//         }
//         max = Math.max(...tempA,max);
//         tempA = [];
//         len--;
//     }
    
//     return max;
// };

// function addSum(result,item){
//     result = (result || 0) + item;
//     return result;
// }


/**第二种 */
// var maxSubArray = function(nums) {
//     var len = nums.length ;
//     const l = len;
//     var max = nums[0];
//     var i ;
//     var offset = 0;
//     var tempA ;
    
//     while(len !== 0){
//         i = 0;
//         //tempA.push(nums.slice(i,i+len).reduce(addSum));
//         //tempA = nums.slice(i,i+len).reduce(addSuma);
//         tempA = addSum(nums.slice(i,i+len));
//        // tempA.push(addSum(nums.slice(i,i+len)));
//         max = Math.max(tempA,max);
//         i++;
//         while(i + len <= l){
//             offset = nums[i + len - 1] - nums[i-1]; 
//             tempA = tempA + offset;
//             max = Math.max(tempA,max);
//             //tempA.push(tempA[i-1] + offset);
//             //tempA.length = 100
//             i++;
//         }
//        // max = Math.max(...tempA,max);
//         //tempA = []
//         len--;
//     }
    
//     return max;
// };

// function addSum(arr){
//     var result = 0;
// 	var i = 0;
//     var len = arr.length;
//      for(i ;i < len ;i++ ){
//          result += arr[i];
//      }
//     return result;
// }

/**第三中 */
/**
 * 接收变量 max;
    累加变量 temp;
    当
	temp = temp + current;
	if(temp < 0) {
		temp = 0;
	}else if(current < 0){
		continue ;
	}else {
		max = Math.max(max,temp);
	}
 */
var maxSubArray = function(nums) {
    var max = nums.shift(),temp = max > 0? max :0;
    while(nums.length !== 0){
        temp = temp + nums.shift();
        max = Math.max(max,temp);
        if(temp < 0) temp = 0;
    }
    return max;
};

