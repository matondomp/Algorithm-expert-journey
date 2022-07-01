/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * TIME COMPLECITY O(n ^ 2) and SPACE O(1)
 function sortColors(nums) {
  for(let i = 0; i < nums.length; i++) {
     sortNumber(i, nums)
  }
  return nums
};

let sortNumber = (idx, nums) => {
  let index = idx
  while(index < nums.length) {
    if(nums[idx] > nums[index]) {
      let current = nums[index]
      nums[index] = nums[idx]
      nums[idx] = current
    }
    index++
  }
}
*/

function sortColors(nums) {
  let left = 0
  let lengths = nums.length - 1
  let current = 0

  while(current <= lengths) {
    
    if(nums[current] === 2) {
      swapp(current, lengths, nums)
      lengths--
    }else if(nums[current] === 0) {
      swapp(current, left, nums)
      left++
      current++
    }else {
      current++
    }
  }
  return nums
};

function swapp(current, idx, nums){
  let temp = nums[current]
  nums[current] = nums[idx]
  nums[idx] = temp
}

console.log(sortColors([2,0,2,1,1,0]))
console.log('****')
console.log(sortColors([2,0,1])) 
console.log('****') 
//console.log(sortColors("caedbdedda"))

