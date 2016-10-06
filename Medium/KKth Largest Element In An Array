/*215. Kth Largest Element in an Array
https://leetcode.com/problems/kth-largest-element-in-an-array/
Difficulty: Medium

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
var findKthLargest = function(nums, k) {
    nums.sort(function(a, b){return a-b});
    return nums[nums.length-k];
};
