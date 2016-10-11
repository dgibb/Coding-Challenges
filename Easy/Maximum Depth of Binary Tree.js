104. Maximum Depth of Binary Tree
https://leetcode.com/problems/maximum-depth-of-binary-tree/
Difficulty: Easy

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
 
 
var maxDepth = function(root) {
    if (root===null){
        return 0;
    }
  if (root.left===null && root.right===null){
        return 1;
    }
    var left;
    var right;
    if(root.left===null){
        left=0;
    } else{
        left=maxDepth(root.left);
    }
     if(root.right===null){
        right=0;
    } else{
        right=maxDepth(root.right);
    }
    var max=Math.max(left,right);
    return max+1;
};
