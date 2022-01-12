/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let queue = [];
  let result = [];
  queue.push(root);
  let level = 0;
  while (queue.length) {
    let size = queue.length;
    let row = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (level % 2 === 0) {
        row.push(node.val);
      } else {
        row.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    level++;
    result.push(row);
  }
  return result;
};
// @lc code=end
