/*
  time O(n) space(1) swapping value
var removeElement = function(nums, val) {

    let left = 0
    let right = 1
    if(nums.length === 1 && nums[0] !==val) return nums
    while(right < nums.length) {

        if(nums[left] !== val){ 
            left++
            right++
            if(right >= nums.length){
               if(nums[left] === val) break 
               return nums
            }
        }else if(nums[right] === val){
            right++
        }else{
            swappNumber(left, right, nums)
        }
    }
    nums.splice(left , nums.length)
    return nums
}

function swappNumber(leftIdx, rightIdx, nums) {
    let temp = nums[leftIdx]
    nums[leftIdx] = nums[rightIdx]
    nums[rightIdx] = temp
} */

// time O(n) space O(1) easy solution replecing nums[i] by nums[n - 1]

function removeElement(nums, val) {
    let left = 0
    let right = nums.length
    while(left < right) {
       if(nums[left] === val) {
          nums[left] = nums[right - 1]
          right--
       }else{
           left++
       }
    }
    nums.splice(right , nums.length)
    return nums
 };
 console.log(removeElement([0,1,2,2,3,0,4,2], 2))
 console.log(removeElement([3,2,2,3],3))
 console.log(removeElement([1,1],1))  
 console.log(removeElement([1],2))   
 console.log(removeElement([5,5],3)) 
 console.log(removeElement([4,5],4))   
 console.log(removeElement([2,2,2], 0))
 console.log(removeElement([2,2,3], 3)) 
 console.log(removeElement([2,2,4,4,3], 3))

