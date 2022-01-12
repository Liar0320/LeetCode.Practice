/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    return isValid(root);
};
function isValid(root, min, max){
    if(!root) return true;
    if((min === undefined || min < root.val )&& (max === undefined || max > root.val)){
        return isValid(root.left,min,root.val)&&
             isValid(root.right,root.val,max);
    }
    return false;
}


// var isValidBST = function(root) {
//     if( !root) return true;
//     if( !valid(root)) return false;
//     var left=true ,right =true;
//     if(root.left){
//         left = isValidBST(root.left);
//     }else if(root.right){
//         right = isValidBST(root.right);
//     }
//     return left && right ;
// };

// function valid(root){
//     var left,right;
//     if(root.left){
//        left = getNode(root.left);
//        if(Math.max.apply(this,left) >= root.val) return false; 
//     }
//     if(root.right){
//        right = getNode(root.right);
//        if(Math.min.apply(this,right) <= root.val) return false; 
//     }
//     return true;
// }

// function getNode(branch){
//     var result = [branch.val];
//     if(branch.left) result = result.concat(getNode(branch.left));
//     if(branch.right) result = result.concat(getNode(branch.right));
//     return result;
// }


