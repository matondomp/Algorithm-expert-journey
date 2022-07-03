

var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length - 1
    while(left < right) {
      let middle = Math.floor((left + right) / 2)
      if(nums[middle] > nums[middle + 1]) {
        right = middle
      } else {
        left = middle + 1
      }
    }
    return  left
};

console.log(findPeakElement([1,2,1,3,5,6,4]))
console.log('---')
console.log(findPeakElement([1,2,3,1]))
console.log('---')
console.log(findPeakElement([5,4]))