/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//     return root === null? 0 : Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
// };

var maxDepth = function(root) {
    if(!root) return 0;
   var leftDepth = 1, rightDepth = 1 ,depth = arguments[1] || 1;
        if(root.left) leftDepth = maxDepth(root.left,depth + 1);
        if(root.right) rightDepth = maxDepth(root.right,depth + 1);
        
        return Math.max(leftDepth,rightDepth,depth);
};

