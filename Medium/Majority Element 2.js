/*
229. Majority Element II
https://leetcode.com/problems/majority-element-ii/
Difficulty: Medium

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space.

@param {number[]} nums
@return {number[]}
*/

var majorityElement = function(nums) {
    var value = [];
    var count=[];
    for (var i=0; i<nums.length;i++){
        if (value.indexOf(nums[i])===-1){
            value.push(nums[i]);
            count.push(1);
        }else{
            count[value.indexOf(nums[i])]++;
        }
    }
    var solutions=[];
    for(i=0; i<value.length;i++){
        if (count[i]>nums.length/3){
            solutions.push(value[i]);
        }
    }
    return solutions;
};
