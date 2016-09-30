public class Solution {
    public boolean isPalindrome(int x) {
        boolean palindrome=true;
        System.out.println(x);
        char [] numbers = String.valueOf(x).toCharArray();
        System.out.println(numbers.length);
        for (int i=0; i<numbers.length-1; i++){
               System.out.println(i);
            if (numbers[i]!=numbers[numbers.length-(i+1)]){
                palindrome=false;
            }
        }
    return palindrome;
    }
}
