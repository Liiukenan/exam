// 两数之和
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length-1; i++) {
        for (var j = i+1; j < nums.length; j++) {
           if(nums[i]+nums[j]===target){
               return [i,j]
           }
        }
    }
};
// [2,7,5]  9

let res = twoSum([1,10,5,6,7,7],8)
console.log(res);