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
