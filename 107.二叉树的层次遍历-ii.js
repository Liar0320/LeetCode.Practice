/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 * 因为是倒叙
 * 当思考从下往上遍历是   因为树形结构 逆向有点困难，转换思维 从上往下 ，第一个放到最后
 * 定义一个层级的容器。从左向下遍历，这样保证左边的都处于第一位
 */
let store = nodeOrderStore();

var levelOrderBottom = function(root) {
    let node = root;
    if(node === null) return [];
    
    store.clear();
    
    getOrderNode(node,0);

    return store.get().reverse();
};

/** 获取递归存储节点 */
function getOrderNode(node,level) {
    if(node === null) return null;

    store.set(node.val,level);

    getOrderNode(node.left,level+1);
    getOrderNode(node.right,level+1);
}

/** 层级容器 */
function nodeOrderStore() {
    var store = [];
    /**
     * 
     * @param {TreeNode} node 
     */
    function set(value,level) {
        if(store[level] === undefined) store[level] = [];
        store[level].push(value);
    }
    function get() {
        return store;
    }
    /**清空容器 */
    function clear() {
        store.length = 0;
    }

    return{
        get,
        set,
        clear
    };
}

