/*
151. Reverse Words in a String
https://leetcode.com/problems/reverse-words-in-a-string/
Difficulty: Medium

Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the". 

@param {string} str
@returns {string}
*/
 
var reverseWords = function(str) {
    var array = str.split(" ");
    array.reverse();
    for (var i=0; i<array.length;i++){
        if (array[i]===""){
            array.splice(i,1);
            i--;
        }
    }
    str=array.join(' ');
    return str;
};
