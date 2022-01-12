/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
var levelOrder = function(root) {
  let result = [];
  if (!root) {
    return result;
  }
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let row = [];
    for (let i = 0, ii = queue.length; i < ii; i++) {
      const treeNode = queue.shift();
      row.push(treeNode.val);
      if (treeNode.left) {
        queue.push(treeNode.left);
      }
      if (treeNode.right) {
        queue.push(treeNode.right);
      }
    }
    result.push(row);
  }
  return result;
};
// @lc code=end

//#region 描述
/*
采用 
bfs 广度优先搜索
队例
*/
//#endregion
