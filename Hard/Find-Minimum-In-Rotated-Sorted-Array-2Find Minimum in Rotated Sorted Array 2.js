/*
154. Find Minimum in Rotated Sorted Array II  QuestionEditorial Solution  My Submissions
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
Difficulty: Hard

Suppose a sorted array is rotated at some pivot unknown to you beforehand.
(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
Find the minimum element.
The array may contain duplicates.

@param {number[]} nums
@return {number}
*/

var findMin = function(nums) {
    if (nums.length==1){
        return nums[0]
    }
    var i=0;
    while (nums[i]<=nums[i+1]&&i<nums.length-1){
        i++;
    }
    return nums[(1+i)%nums.length];
};
