/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
// var hasCycle = function(head) {
//     if(head === null) return false;
// 	var q1 = head;
// 	var q2 = head;
    
// 	do{
// 		q1 = q1.next;
// 		if(q1 === null) return false;
// 		q2 = q2.next.next;
// 		if(q2===null || q2.next === null) return false;
// 	}while(q1 != q2)
	
// 	return true
// };

var hasCycle = function(head) {
	var q1 = head;
	var q2 = head;
    while(q1&&q2&&q2.next){
          q1 = q1.next;
          q2 = q2.next.next;
          if(q1 ===q2) return true
    }
	return false
};

// var hasCycle = function(head) {
//     var hash = [];
//     if(head === null) return false;
//     while(head){
//         if(hash.includes(head)) return true
//         hash.push(head);
//         head = head.next;
//     }
//     return false
// };

