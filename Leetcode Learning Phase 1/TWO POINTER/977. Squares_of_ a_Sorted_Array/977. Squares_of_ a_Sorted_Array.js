/*
 Solution 1:  time complexity O(n + n + n/m) space O(1)
var sortedSquares = function(nums) {
    //base case
    if(nums.length < 2) return nums
    //logic
    let left = 0 
    let right = nums.length - 1
    nums = nums.map(num => num ** 2)
    while(right > 0) {
       if(left >= right){
        console.log(nums[left], nums[right])
         left = 0;
         right--;
       }else if(nums[left] > nums[right]){
         console.log('else if<<<<<s',nums[left], nums[right])
         swappNumber(left, right, nums)
       }else{
         left++
       }
    }
    return nums
};

function swappNumber(leftIdx, rightIdx, nums) {
  let temp = nums[leftIdx] 
  nums[leftIdx] = nums[rightIdx]
  nums[rightIdx] = temp
} 

Solution 2: time O(n + m) space O(n)

var sortedSquares = function(nums) {
  //base case
  
  //logic
  let left = 0 
  let right = 0
  let min = Infinity
  let newArray = []
  nums = nums.map(num => num ** 2)
  if(nums.length < 2) return nums

  for(let i = 0; i < nums.length; i++) {

     if(min > nums[i]) {
        min = nums[i] 
        left = i - 1
        right = i + 1
     }
  }
  newArray[0] = min
//return { newArray, nums , left, right, min}
  while(left >= 0 || right < nums.length) {
     if(nums[left] > nums[right]){
      console.log(nums[left], nums[right])
       newArray.push(nums[right])
       right++;
     }else if(nums[left] < nums[right]){
       console.log('else if<<<<<s',nums[left], nums[right])
       newArray.push(nums[left])
       left--
     }else{
      console.log('else ==s',nums[left], nums[right],  nums[right] && nums[right])
      nums[left] !== undefined && newArray.push(nums[left])
      nums[right] !== undefined && newArray.push(nums[right])
      left--
      right++
     }
  }
  return newArray
};

*/
// Best solution time O(n) space O(n)
var sortedSquares = function(nums) {
    //base case
    let lengths = nums.length
    if(nums.length < 2) return nums
    //logic
    let left = 0 
    let right = lengths - 1
    let index = lengths - 1
    let numsSquare  = new Array(nums.length).fill(null)
    while(index >= 0) {
      let leftSquare = nums[left] ** 2
      let rightSquare = nums[right] ** 2
       if(leftSquare > rightSquare){
         numsSquare[index--] = leftSquare
         left++
       }else{
         numsSquare[index--] = rightSquare
         right--
       }
    }
    return numsSquare
};


  
console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-5,-3,-2,-1]));
console.log(sortedSquares([0,0,1]))


