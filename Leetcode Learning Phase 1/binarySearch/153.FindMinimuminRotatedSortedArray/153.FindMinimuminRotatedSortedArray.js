

var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    while(left < right) {
      let middle = Math.floor((right + left) / 2)
      let potentialMatch = nums[middle]
      if(potentialMatch > nums[right]) {
        left = middle + 1
      } else {
        right = middle
      }
    }
    return nums[left]
}
  console.log(findMin([3,4,5,1,2]))
 console.log('---')
 console.log(findMin([4,5,6,7,0,1,2]))
 console.log('---')
 console.log(findMin([11,13,15,17]))
 console.log('---')