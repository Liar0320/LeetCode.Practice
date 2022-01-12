/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 * 如果小于则走左边 大于则走左边
 * 当前节点的节点路径<currentRoute> === 目标节点路径<targetRoute> 如果成立则返回
 * 如果当前节点的路径<currentRoute> >  目标节点路径<targetRoute> 则不成立返回 false;
 * 如果当前节点的路径<currentRoute> <  目标节点路径<targetRoute> 
 *                                          则如果左节点存在值 则进行 递归
 *                                            如果不存在左节点 或者 左节点的返回值为 false， 则进行右节点递归，
 *                                            如果不存在右节点 则 返回 false，
 * 因为他不是二叉搜索树所以 每一条都进行判断
 *      又因为只有是 末节点 相等路程时才有效所以增加判断   if(node.left === null && node.right === null)
 */
var hasPathSum = function(root, sum) {
    if(!root) return false;
    var currentRouter = 0;
    var targetRoute = sum;
    return deepRecurrence(root,currentRouter,targetRoute);
};

function deepRecurrence(node,currentRouter,targetRoute) {
    if(!node) return false;
    currentRouter = node.val + currentRouter;
    if(currentRouter === targetRoute) {
        /**根节点 */
        if(node.left === null && node.right === null){
            return true;
        }else{
            // return false;
        }
    }
    // if(currentRouter > targetRoute) return false;

    var result = false;
    // if(currentRouter < targetRoute){
    if(node.left !== null){
        result =  deepRecurrence(node.left,currentRouter,targetRoute);
    }
    if(result) return result;
    if(node.right !== null){
        result =  deepRecurrence(node.right,currentRouter,targetRoute);
    }
    // }
    return result;
}

