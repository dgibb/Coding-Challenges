/*
169. Majority Element
https://leetcode.com/problems/majority-element/
Difficulty: Easy

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

 * @param {number[]} nums
 * @return {number}
 */
 
var majorityElement = function(nums) {
    if (nums.length<2){
        return nums[0];
    }
    var mE;
    var count=1;
    nums.sort(function(a,b){return a-b});
    for (var i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            count++;
        }else{
            count=1;
        }
        if(count>nums.length/2){
            mE=nums[i];
            break;
        }
    }
    return mE;
};
