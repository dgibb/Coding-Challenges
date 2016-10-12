/*
347. Top K Frequent Elements
https://leetcode.com/problems/top-k-frequent-elements/
Difficulty: Medium

Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:

    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

@param {number[]} nums
@param {number} k
@return {number[]}
*/
 
 
var topKFrequent = function(nums, k) { 
    var solutions = [];
    nums.sort(function(a,b){return a-b});
    var elements=[];
    var count=1;
    for (var i=1;i<nums.length;i++){
        if(nums[i]!==nums[i-1]){
            elements.push([count,nums[i-1]]);
            count=1;
        }else{
            count++;
        }
    }
    elements.push([count,nums[nums.length-1]]);
    elements.sort(function(a,b){return a[0]-b[0]});
    for(i=0;i<k;i++){
        console.log(elements[elements.length-1-i][1]);
        solutions.push(elements[elements.length-1-i][1]);
    }
    return solutions;
};
