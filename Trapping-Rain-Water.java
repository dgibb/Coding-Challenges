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