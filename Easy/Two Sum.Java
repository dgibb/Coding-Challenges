/*
1. Two Sum
https://leetcode.com/problems/two-sum/
Difficulty: Easy

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

public class Solution {
    public int[] twoSum(int[] nums, int target) {
    int[] solution = new int[2];
    int i =0;
       while (i < nums.length){
           for (int j=0; j < nums.length; j++){
               if ((nums[i]+nums[j] == target) && (i !=j)){
                   solution [0]= i;
                   solution [1]= j;
               }
           }
           if (solution[1]+solution[0] != 0){
               break;
           }
        i++;   
       } 
       return solution;
    }
}
