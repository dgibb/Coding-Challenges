/**
 * @param {number[]} nums
 * @return {number}
 */

var wiggleMaxLength = function(nums) {
    
    var less;
    
    if (nums.length<=1){
        return nums.length;
    }
    
    while (less===undefined&&nums.length>1){
        if (nums[1]<nums[0]){
            less=false;
        } else if (nums[1]>nums[0]){
            less=true;
        } else{
            nums.shift();
        }
    }
    
    var i=1;
    while (i<nums.length-1){
       if (doesWiggle(nums, i, less)){
            less=!less;
            i++;
       }else{
           nums.splice(i,1);
       }
       
    }
    return nums.length;
};

var doesWiggle=function(nums, i, less){
      return ( (nums[i+1]>nums[i]) || less ) && !( (nums[i+1]>=nums[i]) && less );
};
