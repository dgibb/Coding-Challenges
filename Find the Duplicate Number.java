public class Solution {
    public int findDuplicate(int[] nums) {
        int duplicate =0;
        for (int i =0; i< nums.length; i++){
            for(int j =0; j< nums.length; j++)
            if ((i!=j)&&(nums[i]==nums[j])){
            duplicate=nums[i];
                
            }
        }
        return duplicate;
    }
}