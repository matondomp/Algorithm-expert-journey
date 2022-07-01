

//naive solution time O (n log n) space (1)
var longestOnes = function(nums, k) {

   let lengths = nums.length,
      ans = 0, left = 0, right = 0;
    let count = 1

   while (right < lengths){
       if (nums[right] != 0){
           right++;
       }else if (nums[right] === 0 && count <= k){
        right++;
        count++
       } else{
           left++
           right = left
           count = 1
      }
      ans = Math.max(ans, right - left);
   }
   return ans
};

// good solution time O(n) space O(1)
var longestOnes = function(nums, k) {

  let lengths = nums.length,
     ans = 0, left = 0, right = 0;

  while (right < lengths){
      if (nums[right] === 0) k--
      
      if (k < 0) {
        if(nums[left] === 0) k++
        left++;
      }
      right++
      ans = Math.max(ans, right - left);
  }
  return ans
};

  //console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
 console.log('-----')
 console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2))
 console.log('-----')
 console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))

