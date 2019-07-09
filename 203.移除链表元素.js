/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 * 如果等于删除的值， 删除当前node ， 即prevNode.next = node.next;并且将 node = node.next; 
 * 如果不等于删除的值 则继续下一个节点 即prevNode = node;  node = node.next;
 */
var removeElements = function(head, val) {
	if(head === null) return null;
	let prevNode = null;
	let node = head;
	while (head.val === val) {
		head = head.next;
		prevNode = head;
		if(head === null) return null;
		node = head.next;
	}

	while (node) {
		if(node.val === val){
			prevNode.next =  node.next;
		}else{
			prevNode = node;
		}
		node = node.next;
	}
	return head;
};

