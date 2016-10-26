354. Reverse Vowels of a String
https://leetcode.com/problems/reverse-vowels-of-a-string/
Difficulty: Easy

Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y". 

* @param {string} s
* @return {string}
*/


var reverseVowels = function(s) {
    
    var array = s.split('');
    var vowels = ['a','A','e','E','i','I','o','O','u','U'];
    var i=0;
    var j=s.length-1;
    
    while(i<j){
    
        while(vowels.indexOf(array[i])===-1&&i<j){
            i++;
        }
        
        while(vowels.indexOf(array[j])===-1&&j>i){
            j--;
        }
        
        if (i<j){
            var temp=array[i];
            array[i]=array[j];
            array[j]=temp;
            i++;
            j--;
        }
        
    }
    
    s=array.join('');
    return s;
};
