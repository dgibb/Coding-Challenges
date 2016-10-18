/*
58. Length of Last Word
https://leetcode.com/problems/length-of-last-word/
Difficulty: Easy

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example,
Given s = "Hello World",
return 5. 

* @param {string} s
* @return {number}
*/
 
 
var lengthOfLastWord = function(s) {
    if (s.length===0){return 0;}
    s=s.trim();
    var array=s.split(" ");
    return array[array.length-1].length;
};
