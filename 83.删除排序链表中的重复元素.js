/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 */
var deleteDuplicates = function(head) {
    var hasKeys = {};
    let current = head;
    var prevStep = null;
    while (current) {
        if(hasKeys[current.val]){
            prevStep.next = current.next;
            current = current.next ? current.next:null;
        }else{
            hasKeys[current.val] = true;
            prevStep = current;
            current = current.next;
        }
 
    }
    return head;
};

