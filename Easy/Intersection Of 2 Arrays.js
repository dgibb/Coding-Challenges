/*
349. Intersection of Two Arrays
https://leetcode.com/problems/intersection-of-two-arrays/
Difficulty: Easy

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2]. 

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    var solutions =[];
    
    nums1.sort(function(a, b) {
    return a - b;
    });
    
    nums2.sort(function(a, b) {
    return a - b;
    });
    
    for (var i=0;i<nums1.length;i++){
        var j=0;
        while (j<nums2.length){
            if(nums1[i]===nums2[j]&&nums1[i]!==solutions[solutions.length-1]){
                solutions.push(nums2[j]);
                nums2.splice(j,1);
                break;
            }
            j++;
        }
    }
    return solutions;
};
