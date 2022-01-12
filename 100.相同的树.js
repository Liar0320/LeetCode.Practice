/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 将一颗书拆解成最小单元 即 树顶树枝，
 * 如果树顶 相等并且树枝相等 则这两块相等， 
 * 如果树枝不为null进行下一个最小单元的比较。
 */
var isSameTree = function(p, q) {
	/**如果两个节点相等  那肯定是 null === null */
	if(p === q) return true;
	/**如果一个节点 === null 则另一个节点肯定存在 所以不相等 */
	if(p === null || q === null) return  false;
	/**如果两个节点的值不相等  则两个节点不相等*/
	if(p.val !== q.val) return false;
    
	/**如果 a左边的值 不等于  b 左边的值  则两颗树肯定不相等*/
	if(isSameTree(p.left,q.left) === false) {
		return false;
	}
	/**如果 a右边的值 不等于  b 右边的值  则两颗树肯定不相等*/
	if(isSameTree(p.right,q.right) === false){
		return false;
	}
	/**综上 这个最小单元树相等 */
	return true;
};

