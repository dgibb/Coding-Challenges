/*
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/
Difficulty: Easy

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Have you thought about this?

Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Update (2014-11-10):
Test cases had been added to test the overflow behavior.

* @param {number} x
* @return {number}
*/

var reverse = function(x) {
    var negative;
    if (x<0){
        negative=true;
    } else {
        negative=false;
    }
    x=x.toString();
    console.log(x);
    var array=x.split('');
    console.log(array);
    array.reverse();
    console.log(array);
     if (negative===true){
        array.unshift(array.pop());
    }
    console.log(array);
    x=array.join('');
    console.log(x);
    x=parseInt(x);
    if (x>2147483647||x<-2147483648){
        x=0;
    }
    return x;
};
