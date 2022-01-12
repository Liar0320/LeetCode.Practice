/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (!root) return false;
  var queue = [];
  queue.push(root);
  var result = [];
  while (queue.length) {
    for (let i = 0, ii = queue.length; i < ii; i++) {
      let node = queue.shift();
      if (result.indexOf(k - node.val) > -1) return true;
      result.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return false;
};

// /**
//  * 如果target小于node.val则从node的左子树查找，
//  * 如果target大于node.val则从node的右子树查找
//  * 如果target===node.val 或者 查找节点为null时返回
//  * @param {*} node
//  * @param {*} target
//  */
// function helper(node,target) {

// }
// @lc code=end
