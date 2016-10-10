350. Intersection of Two Arrays II
https://leetcode.com/problems/intersection-of-two-arrays-ii/
Difficulty: Easy

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:

    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var solutions =[];
    for (var i=0;i<nums1.length;i++){
        var j=0;
        while (j<nums2.length){
            if(nums1[i]===nums2[j]){
                solutions.push(nums2[j]);
                nums2.splice(j,1);
                break;
            }
            j++;
        }
    }
    return solutions;
};
