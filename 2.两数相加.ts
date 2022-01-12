/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 * 1.0  遍历 当有任何乙方存在时 都继续 生成新的队列 保留进制数
 * 基准条件  溢出为0 数值A为空 数值B为空
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let rootListNode = new ListNode();
  let currentNode = null;
  let isRoot = true;
  let overflow = 0;
  while (l1 || l2 || overflow) {
    if (isRoot) {
      currentNode = rootListNode;
      isRoot = false;
    } else {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
    if (!l1) l1 = new ListNode(0);
    if (!l2) l2 = new ListNode(0);
    let val = l1.val + l2.val + overflow;
    overflow = Math.floor(val / 10);
    currentNode.val = overflow === 1 ? val % 10 : val;
    l1 = l1.next;
    l2 = l2.next;
  }

  return rootListNode;
}

// function recursive(
//   l1: ListNode | null,
//   l2: ListNode | null,
//   currentNode: ListNode,
//   overflow: number = 0
// ) {
//   if (!l1) l1 = new ListNode(0);
//   if (!l2) l2 = new ListNode(0);
//   let val = l1.val + l2.val + overflow;
//   overflow = Math.floor(val / 10);
//   currentNode.val = overflow === 1 ? val % 10 : val;

//   /**基线条件  溢出为0 数值A为空 数值B为空*/
//   if (!l1.next && !l2.next && overflow === 0) {
//     return currentNode;
//   }

//   let childNode = new ListNode();
//   currentNode.next = childNode;
//   recursive(l1.next, l2.next, childNode, overflow);
// }

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   let rootListNode = new ListNode();
//   recursive(l1, l2, rootListNode, 0);
//   return rootListNode;
// }
// @lc code=end
