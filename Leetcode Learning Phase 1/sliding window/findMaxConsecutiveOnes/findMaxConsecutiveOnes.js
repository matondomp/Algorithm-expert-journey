


var findMaxConsecutiveOnes = function(nums) {
   let left = 0
   let max = 0
   let count = 0, lengths = nums.length
   
   while(left < lengths) {
       if(nums[left] === 1) {
         count++
       }else{
         count = 0
       }
       max =   Math.max(max, count)
       left++
   }
   return max
};

  console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
 console.log('-----')
 
