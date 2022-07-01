// brute force approach time O(n^2) space O(1)
/* var trap = function(height) {
  let sum = [0]
  for(let i = 0; i < height.length; i++) {
    helper(i, height, sum)
  }
  return sum
};

let helper = (idx, height, sum) => {
     let i = idx
     let leftMax = 0, rightMax = 0
     while(i < height.length) { 
      rightMax = Math.max(rightMax, height[i])
       i++
     }
     i = idx
     while(i >= 0) { 
      leftMax = Math.max(leftMax, height[i])
      i--
    }
    sum[0] += Math.min(leftMax, rightMax) - height[idx] 
     
} */

// dynamic programing time O(n) space O(n)


/* 


var trap = function(height) {
  let leftMax = [height[0]]
  let rightMax = new Array(height.length - 1).fill(0)
      rightMax[height.length - 1] = height[height.length - 1]
  findLeftMax(leftMax, height)
  findRightMax(rightMax, height)
  return helper(height, leftMax, rightMax)
};
let findLeftMax = (max, height) => {
  for(let i = 1; i < height.length; i++) {
     max[i] = Math.max(max[i - 1], height[i])
  }
}
let findRightMax = (max, height) => {
   for(let i = height.length - 2 ; i >= 0; i--) {
     max[i] = Math.max(max[i + 1], height[i])
   }
}
let helper = (height, leftMax, rightMax) => {
  let sum = 0
   for(let i = 0; i < height.length; i++) {
      sum += Math.min(leftMax[i], rightMax[i]) - height[i]
   }
   return sum
}

*/
//Two Pointer approach time O(n) space O(1)

function trap(height) {
  let left = 0
  let right = height.length - 1
  let leftMax = [0], rightMax = [0]
  let sum = [0]
  
  while(left < right) {
      if(height[left] < height[right]) {
          findMax(left, leftMax, height, sum)
          left++
      }else {
          findMax(right, rightMax, height, sum)
          right--
      }
  }
  return sum[0]
};

let findMax = function(idx, maxIdx, height, sum) {
   height[idx] >= maxIdx ? (maxIdx[0] = height[idx]) : (sum[0] += maxIdx[0] - height[idx])
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log('-----')
console.log(trap([4,2,0,3,2,5]));
console.log('----')
console.log('----') 
console.log(trap([2,0,2]));
console.log('----') 
console.log(trap([4,2,3]));



