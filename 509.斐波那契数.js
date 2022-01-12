/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */
/**
 * @param {number} N
 * @return {number}
 * @description
 * // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233，377，610，987，1597，2584，4181，6765，10946，17711，28657，46368
//fibonSequence(n) = fibonSequence(n-1) + fibonSequence(n-2);
 */
var fib = function(N) {
    if(N===0||N===1) return N;
	return fib(N-1) + fib(N-2);
};

