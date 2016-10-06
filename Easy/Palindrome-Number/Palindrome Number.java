/*
9. Palindrome Number
https://leetcode.com/problems/palindrome-number/
Difficulty: Easy

Determine whether an integer is a palindrome. Do this without extra space.
*/

public class Solution {
    public boolean isPalindrome(int x) {
        boolean palindrome=true;
        char [] numbers = String.valueOf(x).toCharArray();
        for (int i=0; i<numbers.length-1; i++){
            if (numbers[i]!=numbers[numbers.length-(i+1)]){
                palindrome=false;
            }
        }
    return palindrome;
    }
}
