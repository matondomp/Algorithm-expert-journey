
function removeDuplicates(nums) {
  let left = 0;
  let right = 1;
  let count = 0;
  while (right < nums.length) {
	swappNumber(left + 1, right, nums);
    if (nums[left] === nums[right] && count === 0) {
      count = 1
      left++;
      right++;
    } else if (nums[left] === nums[right] && count === 1) {
      right++;
    }else{
      count = 0;
      left++;
      right++;
    } 
  }

  nums.splice(left + 1, nums.length);
  return nums
}

function swappNumber(leftIdx, rightIdx, nums) {
  nums[leftIdx] = nums[rightIdx];
}
  
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1]))
console.log(removeDuplicates([1,1,1,2,2,3]))
console.log(removeDuplicates([0]))

