/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var boolArray=[];
    for (var i=0; i<nums.length+1;i++){
        boolArray.push(false);
    }
    for (i=0; i<nums.length;i++){
        boolArray[nums[i]]=true;
    }
    return boolArray.findIndex(isFalse);
};

var isFalse = function(x){
    return x===false;
};
