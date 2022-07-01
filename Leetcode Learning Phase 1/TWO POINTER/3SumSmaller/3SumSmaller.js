/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 function threeSumSmaller(nums, target) {
  let smallest = 0
  let result = [0]
  nums.sort((a, b)=> a - b)
  for(let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    smallest = hendleThreeSum(i, left, right, nums,result , target)
  }
  return smallest
};

function hendleThreeSum(Idx, leftIdx, rightIdx, nums,result, target) { 
   let sum = 0
  
   while(leftIdx < rightIdx) {
     sum = nums[Idx] + nums[leftIdx] + nums[rightIdx]
     if(sum >= target) {
       rightIdx--
     }else  {
       result[0] += rightIdx - leftIdx
       leftIdx++
     }
  }
  return result[0]
}
//console.log(threeSumSmaller([-2,0,1,3], 2));
console.log('---')
//console.log(threeSumClosest([0,0,0], 1));
//console.log(threeSumSmaller([-2,0,-1,3], 2))
//console.log(threeSumSmaller([3,1,0,-2],4))
console.log(threeSumSmaller([1,-2,2,1,0],1))
