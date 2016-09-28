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