
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  let left = 0
  let right = 1
  let arrayWithNumber = []
  for(let i = 0; i < nums.length - 2; i++) {
    left =i + 1;
    right = nums.length - 1;
    if(nums[i] === nums[i - 1]){
      continue
    }
    hendleThreeSum(i, left, right, nums, arrayWithNumber)
  }
  return arrayWithNumber
};

function hendleThreeSum(iIdx, jIdx, kIdx, nums, arrayWithNumber) {
  while(jIdx < kIdx) {
    let sum = nums[iIdx] + nums[jIdx] + nums[kIdx]
    if(sum > 0) {
      kIdx--
      break
    }else if(sum < 0){
      jIdx++
    }else {
      arrayWithNumber.push([nums[iIdx], nums[jIdx], nums[kIdx]])
      jIdx++
      kIdx--
      while(jIdx < kIdx && nums[jIdx] === nums[jIdx - 1]) jIdx++
      while(jIdx < kIdx && nums[kIdx] === nums[kIdx + 1]) kIdx--
    }
  }
}
  
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0]))
console.log(threeSum([0,0,0,0]))
console.log(threeSum([-2,0,0,2,2]))

