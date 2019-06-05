/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 * @description
 * [1,2,3,4,5,6,7,8]
 * 1			2
 * 3     4
 * 5  6  6  7
 * 7   8  
 * 
 * 根据图解可以转换为 树形结构 ，每次抢劫的方案为 从顶点走到末端，在将所有的抢劫方案 转为数组 进行累加。
 * 
 * var branch = {right:<branch>,left:<branch>,val:<value>};
 */
// var rob = function(nums) {
    
// };



// var receive = [1,2,3,4,5,6,7]
// var branchs = [];
// var index;
// len = receive.length
// for(index = 0;index < len ; index++){
// var branch = new Branch(index);
// branchs.push(branch);
// }

// for(index = 0;index < len ;index++){
// var rl = branchs.filter(item => (item.value === index+2) || (item.value === index +3) ) 
// branchs[index].left = rl[0];
// branchs[index].right = rl[1];

// }

// function getAllRoutes(branch){
// var routes = [];
// var routesLeft = [];
// var routesRight = [];
// if(branch.left){
// routesLeft = getAllRoutes(branch.left) || [];
// for(var i = 0 ; i < routesLeft.length;i++){
// routesLeft[i].unshift(branch.value);
// }
// }
// if(branch.right){
// routesRight = getAllRoutes(branch.right) || [];
// for(var i = 0 ; i < routesRight.length;i++){
// routesRight[i].unshift(branch.value);
// }
// }
// routes = routesLeft.concat(routesRight);
// if(routes.length === 0) routes.push([branch.value]);
// return routes;
// }

// function Branch(value,left,right){
// this.value = value;
// this.right = right || null;
// this.left = left || null;
// }
// //-----------
// /**
// * @param {number[]} nums
// * @return {number}
// */
// var rob = function(nums) {
// console.time()
// if(nums.length <= 1) return (nums[0] || 0);
// var branchs = [];
// var index;
// var allRoutes = [];
// len = nums.length
// for(index = 0;index < len ; index++){
// var branch = new Branch(index);
// branchs.push(branch);
// }

// for(index = 0;index < len ;index++){
// var rl = branchs.filter(item => (item.value === index+2) || (item.value === index +3) ) 
// branchs[index].left = rl[0];
// branchs[index].right = rl[1];
// }
// console.timeEnd();
// console.time()
// allRoutes = getAllRoutes(branchs[0]);
// console.timeEnd();
// console.time()
// var maxProfit = 0;
// for(var i = 0; i<allRoutes.length;i++){
// var profix = allRoutes[i].reduce((p,item) => {return (p+nums[item])},0);
// maxProfit = Math.max(profix,maxProfit);
// }
// console.timeEnd();
// return maxProfit
// };

// function getAllRoutes(branch){
// var routes = [];
// var routesLeft = [];
// var routesRight = [];
// if(branch.left){
// routesLeft = getAllRoutes(branch.left) || [];
// for(var i = 0 ; i < routesLeft.length;i++){
// routesLeft[i].unshift(branch.value);
// }
// }
// if(branch.right){
// routesRight = getAllRoutes(branch.right) || [];
// for(var i = 0 ; i < routesRight.length;i++){
// routesRight[i].unshift(branch.value);
// }
// }
// routes = routesLeft.concat(routesRight);
// if(routes.length === 0) routes.push([branch.value]);
// return routes;
// }

// function Branch(value,left,right){
// this.value = value;
// this.right = right || null;
// this.left = left || null;
// }






// 根据图解可以转换为 树形结构 ，每次抢劫的方案为 从顶点走到末端，在将所有的抢劫方案 转为数组 进行累加。
// 	根据结果 太过于复杂在 计算抢劫方案时 线路太多 100多即有100w的线路 。 因此 优化 将每个节点下抢劫的钱 缓存到节点上。
// 	在计算抢劫最大值的时候， 判断每条线路抢的钱，因为有缓存的抢劫总额 所有可以不必多次执行。
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	console.time()
    if(nums.length <= 1) return (nums[0] || 0);
    var branchs = [];
    var index;
    var maxProfit = 0;
    len = nums.length
    for(index = 0;index < len ; index++){
        var branch = new Branch(index,nums[index]);
        branchs.push(branch);
    }

    for(index = 0;index < len ;index++){
        var rl = branchs.filter(item => (item.index === index+2) || (item.index === index +3) ) 
        branchs[index].left = rl[0];
        branchs[index].right = rl[1];
    }
	console.timeEnd();
	console.time(1)
	maxProfit = Math.max(getAllRoutes(branchs[0]),getAllRoutes(branchs[1]));
	console.log(maxProfit,branchs);
	console.timeEnd(1);

    return maxProfit
};

function getAllRoutes(branch){
	var routes = [];
	var routesLeft = null;
	var routesRight = null;
	if(branch.sum === null){
		if(branch.left){
			routesLeft = getAllRoutes(branch.left) || 0;
		}
		if(branch.right){
			routesRight = getAllRoutes(branch.right) || 0;
		}
		branch.sum = branch.value + Math.max(routesLeft,routesRight);
	}
	return branch.sum;
}

function Branch(index,value,left,right){
	this.index = index;
	this.value = value;
	this.right = right || null;
	this.left = left || null;
	this.sum = null;
}

