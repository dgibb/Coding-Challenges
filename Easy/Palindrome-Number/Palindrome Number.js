/*
9. Palindrome Number
https://leetcode.com/problems/palindrome-number/
Difficulty: Easy

Determine whether an integer is a palindrome. Do this without extra space.

@param {number} x
@return {boolean}
*/
var isPalindrome = function(x) {
    var P=true;
    var n=x.toString().length;
    for (var i=0; i<n; i++){
        if (x.toString().charAt(i)!=x.toString().charAt(n-(i+1))){
            P=false;
        }
    }
    return P;
};
