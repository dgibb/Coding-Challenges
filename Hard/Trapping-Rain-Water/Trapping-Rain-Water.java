/*
Trapping Rain Water
https://leetcode.com/problems/trapping-rain-water/
Difficulty: Hard

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example,
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6. 
*/

public class Solution {
    public int trap(int[] height) {
    
    if (height.length<3){
        return 0;
    } 
    
    int[] temp = new int[height.length];
    
    fillArrayLeft(height, temp);
    fillArrayRight(height, temp);
    findDifference(height, temp);
    return findSum(temp);
}
    
    public void fillArrayLeft(int[] height, int[] temp){
        int max;
        for (int i=0; i<height.length;i++){
            max=-1;
            for (int j=i-1;j>=0;j--){
                if (height[j]>max){
                    max=height[j];
                }
            }
        temp[i]=max;
        }
    }
    
    public void fillArrayRight(int[] height, int[] temp){
        int max;
        for (int i=0; i<height.length;i++){
            max=-1;
            for (int j=i;j<height.length;j++){
                if (height[j]>max){
                    max=height[j];
                }
            }
            if (max<temp[i]&&max!=-1){
                temp[i]=max;
            }
        }
    }
    
    public void findDifference(int[] height, int[] temp){
        for (int i=0; i<height.length;i++){
            temp[i]-=height[i];
        }
        for (int i=0; i<height.length;i++){
            if (temp[i]<0){
                temp[i]=0;
            }
        }
    }
    
    public int findSum(int[] temp){
        int sum=0;
        for (int i=0; i<temp.length;i++){
            sum+=temp[i];
        }
        return sum;
    }
    
    
}
