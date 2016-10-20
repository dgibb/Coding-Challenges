/*
204. Count Primes
https://leetcode.com/problems/count-primes/
Difficulty: Easy

Description:

Count the number of prime numbers less than a non-negative number, n.

* @param {number} n
* @return {number}
*/

var countPrimes = function(n) {
    if (n<2){
        return 0;
    }
    
    var primes=[];
    var count=0;
    
    for(var i=0;i<n;i++){
        primes.push(true);
    }
    primes[0]=false;
    primes[1]=false;
    
    for(i=2;i<Math.sqrt(n);i++){
        if (isPrime(i)){
            for(var j=i*i;j<n;j+=i){
                primes[j]=false;
            }
        }
    }
    for(i=0;i<n;i++){
        if (primes[i]===true){
            count++;}
    }  
    return count;
};

var isPrime = function(i){
  for(var x=2;x<i;x++){
      if (i%x===0){
          return false;
      }
  }
  return true;
};
