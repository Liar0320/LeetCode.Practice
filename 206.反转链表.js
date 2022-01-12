/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description
 * 每次循环到最后一位 删除该节点  将该节点 赋予 q1.next;
 * 如果下一个节点是 null 或者 node.next === null;
 * return node ;
 * 如果不是则
 * 将 node的下一个节点指向node
 */
// var reverseList = function(head) {
//     if(!head || head.next === null) return head;
// 	var rn = new ListNode();
// 	var q1 = rn;
// 	var q2 = head.next.next;
// 	var q3 = head;
    
// 	while(true){
// 		while(q2 !== null){
// 			q2 = q2.next;
// 			q3 = q3.next;
// 		}
// 		if(q1.val === undefined){
// 			q1.val = q3.next.val;
// 		}else{
// 			q1.next = q3.next;
// 			q1 = q1.next;
// 		}
// 		q3.next = null;
// 		if(head.next === null) break;
// 		q2 = head.next.next;
// 		q3 = head;
// 	}
// 	q1.next = head;
// 	return rn;
// };


// var reverseList = function (head) {
// 	var prev = null;
// 	var tempNext = null;
// 	var node = head;
// 	while (node) {
// 		tempNext = node.next;
// 		node.next = prev;
// 		prev = node;
// 		node = tempNext;
// 	}
// 	return prev;
// };

var reverseList = function (head) {
	if(head === null || head.next === null){
		return head;
	}else{
		var result = reverseList(head.next);
		var nextNode = head.next;
		nextNode.next = head;
		head.next = null;
	}
	return result;
};

