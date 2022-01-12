/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  if (!root) return 0;

  if (root.val >= L && root.val <= R) {
    return (
      root.val + rangeSumBST(root.right, L, R) + rangeSumBST(root.left, L, R)
    );
  } else if (root.val < L) {
    return rangeSumBST(root.right, L, R);
  } else {
    return rangeSumBST(root.left, L, R);
  }
};

// @lc code=end
