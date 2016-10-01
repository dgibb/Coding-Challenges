/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length==1){
        return nums[0]
    }
    var i=0;
    while (nums[i]<=nums[i+1]&&i<nums.length-1){
        i++;
    }
    return nums[(1+i)%nums.length];
};
