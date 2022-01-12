/*
 * @lc app=leetcode.cn id=2 lang=csharp
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
        public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
        {
            ListNode l_add = new ListNode(0);
            l_add = resarch(l1, l2, l_add.next = new ListNode(0),0);
            return l_add;
        }

        public ListNode resarch(ListNode l1, ListNode l2, ListNode l_normal,int count)
        {
            l1 = l1 == null ? new ListNode(0) : l1;
            l2 = l2 == null ? new ListNode(0) : l2;
            l_normal.val = l1.val + l2.val + count;
            count = 0;
            if (l_normal.val >= 10)
            {
                l_normal.val = l_normal.val%10;
                count++;
            }
            if (count!=0||(l1.next != null || l2.next != null))
            {
                resarch(l1.next, l2.next, l_normal.next = new ListNode(0), count);
            }
            return l_normal;
        }
}

