/**338. Counting Bits
https://leetcode.com/problems/counting-bits/
Difficulty: Medium

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

@param {number} num
@return {number[]}
 */

var countBits = function(num) {
    var number=[];                      
    for (var i = 0; i <= num; i++) {    
        var bits=findBits(i);         
        number.push(bits);          
    }
    return number;
};

var findBits = function(i){ 
    var count=0;
    while (i!==0){          
        if (i & 1==1){      
            count++;        
        } 
        i=i>>1;             
    }                      
    return count;
};
