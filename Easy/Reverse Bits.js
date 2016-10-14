/*
190. Reverse Bits
https://leetcode.com/problems/reverse-bits/
Difficulty: Easy


Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: Reverse Integer

@param {number} n - a positive integer
@return {number} - a positive integer
*/

var reverseBits = function(n) {
    var bin=[];
    var solution=0;
    for(var i=32;i>=0;i--){
        if(n>=Math.pow(2,i)){
            n-=Math.pow(2,i);
            bin.push(1);
        }else{
            bin.push(0);
        }
    }
    bin=bin.reverse();
    console.log(bin);
     for(i=32;i>=0;i--){
        if(bin[i]===1){
            solution+=Math.pow(2,31-i);
        }
    }
    return solution;
};
