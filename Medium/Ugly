/*
264. Ugly Number II
https://leetcode.com/problems/ugly-number-ii/
Difficulty: Medium

Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number. 

@param {number} n
@return {number}
*/

var nthUglyNumber = function(n) {
    var uglyNumbers=[1];
    var i=[0,0,0];
    while (uglyNumbers.length<n){
        if (uglyNumbers[i[0]]*2===uglyNumbers[uglyNumbers.length-1]){
            i[0]++;
        }
        if (uglyNumbers[i[1]]*3===uglyNumbers[uglyNumbers.length-1]){
            i[1]++;
        }
        if (uglyNumbers[i[2]]*5===uglyNumbers[uglyNumbers.length-1]){
            i[2]++;
        }
        var next = Math.min(uglyNumbers[i[0]]*2,uglyNumbers[i[1]]*3,uglyNumbers[i[2]]*5);
        uglyNumbers.push(next); 
    }
    return uglyNumbers[uglyNumbers.length-1];
};
