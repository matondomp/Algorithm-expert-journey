

var search = function(nums, target) {

    let lengths = nums.length - 1
    let lessIdx = findLessNumber(nums, 0)
    if(nums[lengths] < target) {
      return searchElement(nums, target, 0 , lessIdx)
    } else {
      return searchElement(nums, target, lessIdx, lengths)
    }
  
};

let searchElement = (nums, target, left, right) => {
  while(left <= right) {
    let middle = left + Math.floor((right - left) / 2)
    let potentialMatch = nums[middle]
    if(potentialMatch === target) { 
       return middle
    } else if(nums[middle] > target) {
      right = middle - 1
    }else{
      left = middle + 1
    }
  }
  return - 1
}
 
let findLessNumber = (nums, left) => {
   let right = nums.length - 1;
   while(left < right) {
     let middle = left + Math.floor((right - left) / 2)
     if(nums[middle] > nums[right]) {
       left = middle + 1
     }else {
       right = middle
     }
   }
   return left
}
  console.log(search([4,5,6,7,0,1,2], 0))
 console.log('---')
console.log(search([4,5,6,7,0,1,2], 3))
console.log('---') 
console.log(search([1], 1))  
console.log('---') 
console.log(search([1,3], 3))
console.log('---') 
console.log(search([3,1], 1)) 
