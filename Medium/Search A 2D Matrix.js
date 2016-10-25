/*
 74. Search a 2D Matrix
https://leetcode.com/problems/search-a-2d-matrix/
Difficulty: Medium

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

Given target = 3, return true.

 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 
var searchMatrix = function(matrix, target) {
    var i = 0;
    while (matrix[i][matrix[i].length-1]<target&&i<matrix.length-1){
        i++;
    }
    var j=0;
    while (matrix[i][j]!==target&&j<matrix[i].length){
    j++;
    }
    if (j===matrix[i].length){
        return false;
    }
    return true;
};
