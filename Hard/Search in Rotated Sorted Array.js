/*
Search in Rotated Sorted Array
https://leetcode.com/problems/search-in-rotated-sorted-array/
Difficulty: Hard

Suppose a sorted array is rotated at some pivot unknown to you beforehand.
(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
You are given a target value to search. If found in the array return its index, otherwise return -1.
You may assume no duplicate exists in the array.

@param {number[]} nums
@param {number} target
@return {number}
*/

var search = function(nums, target) {
   return nums.indexOf(target);
};

