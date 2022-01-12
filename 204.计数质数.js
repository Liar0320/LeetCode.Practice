/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */
/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function(n) {
//     let i = 2,j, l = n,primes = [],isPrimes;
//     for(i; i < l ;i++){
//         isPrimes = true;
//         for(j = 0;j<primes.length ; j++){
//             if(i%primes[j] === 0){
//                 isPrimes = false;
//                 break;
//             }
//         }
//         if(isPrimes)primes.push(i);
//     }
//     return primes.length;
// };

// var countPrimes = function(n) {
//     console.time()
//     let i = 2,j,primes = {},count = 0;
//     for(i; i < n ;i++){
//         if(isPrimes2(i)){
//             count++;
//         }
//     }
//     function isPrimes2(num){
//         var result=true, i = 2, len = Math.round(Math.sqrt(num));
//         for(i;i<=len;i++){
//             if(num%i === 0){
//                 result = false;
//                 break;
//             } 
//         }
//         return result;
//     }
//     console.timeEnd()
//     return count;
// };


/**
 * like
 * 正向计算，计算所有可以相乘的数 直到n，缓存到array，
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let arr = new Array(n),i= 2,j;
    for(i ;i < n;i++){
        if(typeof arr[i] === 'undefined'){
            for(j = i*i; j<n ; j+=i){
                arr[j] = true;
            }
        }
    }
    let count = 0;
    for(i = 2;i<n;i++){
        if(!arr[i]) count++;
    }
    return count;
};



