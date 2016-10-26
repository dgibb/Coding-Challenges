/*
228. Summary Ranges
https://leetcode.com/problems/summary-ranges/
Difficulty: Medium

Given a sorted integer array without duplicates, return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].

* @param {number[]} nums
* @return {string[]}
*/
 
var summaryRanges = function(nums) {
    
    var i=0;
    var ranges =[];
    
    while (i<nums.length){
        
        var start=i;
        console.log(start);
        
        while(nums[i]===nums[i+1]-1&&i<nums.length){
            i++;
        }
        
       if(start!==i){
        var one = nums[start].toString();
        var arrow= "->";
        var two = nums[i].toString();
        one=one.concat(arrow);
        one=one.concat(two);
        ranges.push(one);
        i++;
              
      }else{
          ranges.push(nums[i].toString());
          i++;
      }
    }
    
    return ranges;

};
