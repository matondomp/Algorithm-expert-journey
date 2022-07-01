
// brute force approach time O(n^2) space O(n)

var minSubArrayLen = function(target, nums) {
  let sums = new Array(nums.length)
  sums[0] = nums[0]
  let answer = Infinity
  for(let i = 1; i < nums.length; i++)
     sums[i] = sums[i - 1] + nums[i]
  for(let i = 0 ; i < nums.length; i++) {
     for(let j = i; j < nums.length; j++) {
        let sum = sums[j] - sums[i] + nums[i]
        if(sum >= target) {
           answer = Math.min(answer, (j - i + 1))
           break
        }
     }
  }
  //return sums
  return answer !== Infinity ? answer : 0   
}

console.log(minSubArrayLen(7,[2,3,1,2,4,3])); 
console.log('-----')
//two pointer BIG O(n) time and space O(1)
function minSubArrayLen(target, nums) {
  let sum = 0
  let answer = Infinity
  let left = 0
  
  for(let i = 0; i < nums.length; i++) {
      sum += nums[i]
      while(sum >= target) {
         answer = Math.min(answer, i + 1 - left)
         sum -= nums[left++]
      }
  }
    return answer != Infinity ? answer : 0
};
/*  console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log('-----')

console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));

console.log('-----')
console.log(minSubArrayLen(4,[1,4,4])); 
console.log('-----')
 
console.log(minSubArrayLen(11,[1,2,3,4,5])) 
 console.log('-----')
console.log(minSubArrayLen(15,[1,2,3,4,5])); 
console.log('-----') */


 console.log(minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12]))
/*console.log('-----')
console.log(minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8])) */
//[2,4,12,12,25,25,25,25,25,26,28,83]