/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.__datas = [];
    this.min = Number.MAX_VALUE;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.min  > x){
        this.min = x;
    }
    this.__datas.unshift(x);
    return this.__datas;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var pop = this.__datas.shift();
    if(this.min === pop){
        this.min = Math.min.apply(null,this.__datas)
    }
    
    return this.__datas;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.__datas[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

