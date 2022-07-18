/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
   let left = 0, right = nums.length - 1
   let res = [Infinity, -1]
   while(left < right) {
       let middle = Math.floor((right + left) / 2)
       
       if(nums[middle] >= target) {
            right = middle
       }else {
         left = middle + 1
       }
       
   }
   
   if(nums[left] !== target) return [-1, -1]
   
   right = nums.length - 1
   let start = left
   
   while(left < right) {
       let middle = Math.floor((right + left) / 2)
       
       if(nums[middle] <= target) {
         left = middle + 1
       }else {
           right = middle
       }
       
   }
   
   let end = nums[left] === target ? left : left - 1
   
   return [start, end]
};

console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))