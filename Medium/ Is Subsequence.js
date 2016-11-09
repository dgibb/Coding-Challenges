/*
392. Is Subsequence
https://leetcode.com/problems/is-subsequence/
Difficulty: Medium

Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t. t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false. 

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
var isSubsequence = function(s, t) {
    var count=0;
    for(var i=0; i<t.length; i++){
        if(t.charAt(i)===s.charAt(count)){
            count++;
        }
    }
    if (count===s.length){
        return true;
    } else{
        return false;
    }
};
