function removeDuplicates(nums) {

    let left = 0
    let right = 1
    while(right < nums.length) {
        if(nums[left] !== nums[right]){ 
           swappNumber(left + 1, right, nums)
           left++
        }else if(nums[left] === nums[right]){
          right++
        }
    }
     nums.splice(left + 1, nums.length - 1)
     return nums
}

function swappNumber(leftIdx, rightIdx, nums) {
    nums[leftIdx] = nums[rightIdx]
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([1,1]))