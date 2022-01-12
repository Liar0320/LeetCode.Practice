/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     var i ;
// 	var temp ;
// 	var node ;
// 	var c = 0;
// 	while(true){
// 		node = head;
// 		for(i = 0; i< c ;i++){
// 			node = node.next;
// 		}
// 		temp = node;
// 		for(i = 0; i<n-1;i++){
// 			temp = temp.next;
// 		}
// 		if(temp.next === null){
// 			if(node.next === null){
// 				node = head;
// 				for(i = 0; i< c -1 ;i++){
// 					node = node.next;
// 				}
// 				c === 0? (head = null):(node.next = null);
// 			}else{
// 				node.val = node.next.val;
// 				node.next = node.next.next;
// 			}
// 			return head;
// 		}
// 		c++;
// 	}
// };

var removeNthFromEnd = function(head, n) {

	var dummyHead = new ListNode(-1);
	dummyHead.next = head;
	var p1 = dummyHead.next;
	for(var i =0; i<n-1;i++){
		p1 = p1.next;
	}
	p1 = p1.next;
	var p2 = dummyHead;
	while(p1 !== null){
		p1 = p1.next;
		p2 = p2.next;
	}

	p2.next = p2.next.next;

	return dummyHead.next;

};
