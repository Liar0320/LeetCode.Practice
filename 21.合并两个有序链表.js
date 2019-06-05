/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	var q1 = l1;
	var q2 = l2;
	var isRun ;
	var head;
	var node ;
	while (true) {
		if(q1!==null && q2 !==null){
			isRun =  q1.val < q2.val? 1:2;
			if(node === undefined){
				node = isRun === 1? q1:q2;
				head = node;
				isRun === 1? (q1 = q1.next):(q2 = q2.next);
			}else{
				node.next = isRun === 1? q1:q2;
				isRun === 1? (q1 = q1.next):(q2 = q2.next);
				node = node.next;
			}
		}else if(q1 === null && q2 ===null){
			return head || null;
		}else if(q1 === null){
			if(node){
				node.next = q2; 
			}else{
				node = q2;
				head = node;
			}
           
		   return head;
		}else{
			if(node){
				node.next = q1; 
			}else{
				node = q1;
				head = node;
			}
			return head;
		}

	}
};

