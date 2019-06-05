/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var q1 = head;
	var q2;

	var preNode = null;
	var tempNode = null ;
	while(head !== null){
		if(tempNode){
			tempNode = new ListNode(head.val);
			tempNode.next = preNode;
			preNode = tempNode;
		}else{
			tempNode = new ListNode(head.val);
			preNode = tempNode;
		}
		head = head.next;
	}
	q2 = tempNode;
  
    
	if(q1 === q2) return true;
	while((q1 !== null || q2 !== null)&&(q1.val === q2.val)){
		q1 = q1.next;
		q2 = q2.next;
	}
	if(q1 === null && q2 ===null){
		return true;
	}else{
		return false;
	}
};

