/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * @description
 * 两个数组的交集 扩展  出现即取 交集；
 * 计算 nums1 nums2 各种不同值出现的次数，
 * nums2中如果存在这个值，取次数小的 push;
 */
var intersect = function(nums1, nums2) {
    let obj1 = nums1.reduce((temp,item)=>{
		temp[item]? ++temp[item]:(temp[item] = 1);
		return temp;
	},{});
	let obj2 = nums2.reduce((temp,item)=>{
		temp[item]? ++temp[item]:(temp[item] = 1);
		return temp;
	},{});
	let temp = [];
	for(let key in obj1){
		if(obj2[key]){
			let index = Math.min(obj2[key],obj1[key]);
			for(let i =0 ;i<index;i++){
				temp.push(key*1);
			}
		}
	}
	return temp;
};










// error
// function intersect(nums1,nums2){
// 	if(nums1.length<nums2.length){
// 		let temp = nums1;
// 		nums1 = nums2;
// 		nums2 = temp;
// 	}
// 	let index = 0;
// 	let maxLength = nums2.length;
// 	while(nums2.length>0){
// 		if(containArray(nums1,nums2)) return nums2;
// 		if(containArray(nums1,nums2.slice(0,maxLength-1))) return nums2.slice(0,maxLength-1);
// 		if(containArray(nums1,nums2.slice(1,maxLength))) return nums2.slice(1,maxLength);
// 		nums2.shift();
// 		nums2.pop();
// 	}
// 	return [];
// }

// //两个数组的交集并且长度顺序一样
// //总体思路，获取A数组的起始数据，从B数组中匹配相同长度相同，比较两组是否相同如果不同，继续在B中查找是否还有A的起始数据，
// //如果没有则将A数组长度逐步递减，递减方式首先首部 之后 尾部 这两次都保留A数组的长度， 如果不成立 A数组去头去尾 直到A数组的长度为0
// function containArray(arrayOld,arrayNew){
// 	let index = 0;
// 	while(arrayOld.length - index >= arrayNew.length){
// 		let temp = true;
// 		index = arrayOld.indexOf(arrayNew[0],index);
// 		if(index===-1)return false;
// 		for(let i = 1;i<arrayNew.length;i++){
// 			if(arrayNew[i]===arrayOld[++index]) continue;
// 			temp = false;
// 			break;
// 		}
// 		if(temp) return true;
// 	}
// 	return false;
// }

