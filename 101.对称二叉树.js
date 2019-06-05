/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var level = 1;
	var bol = true;
	while(root){
		var result = bstToArrayLevel(root,level);
		if(result.every(item=> item === null)) break;
		if(!compareResever(result)){
			bol = false;
			break;
		}
		level++;
	}
	return bol;
};


//将二叉树 转化为数组形式
function bstToArrayLevel(treeNode,level){
	var result = [];
	if(level === 0){
		return [treeNode === null ? null : treeNode.val];
	}
	if(treeNode){
		result = result.concat(bstToArrayLevel(treeNode.left,level-1));
    	result = result.concat(bstToArrayLevel(treeNode.right,level-1));
	}

	return result;
}

//判断一个数组是否为回文
function compareResever(rows){
	var len = rows.length;
	var start = -1;
	do{
		if(rows[++start] !== rows[--len]) break;
	}while(start < len);
	return  (--start === len);
}


