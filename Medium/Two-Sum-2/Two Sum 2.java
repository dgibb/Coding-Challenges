/*
167. Two Sum II - Input array is sorted
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
Difficulty: Medium

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

public class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int[] solutions = new int[] {0,0};
        int i = 0;
        while(numbers[i]<=target&&i<numbers.length-1){
            i++;
        }
        int j=0;
        while (solutions[1]==0){
            for (j=0; j<i;j++){
                if (numbers[i]+numbers[j]==target){
                    solutions[1]=i+1;
                    solutions[0]=j+1;
                    return solutions;
                }
            }
            i--;
        }
    return solutions;
    }
}
