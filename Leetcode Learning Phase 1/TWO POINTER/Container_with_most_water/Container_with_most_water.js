/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let mostContainerWater = 0
  let left = 0
  let right = height.length - 1
  while(left < right) {
     if(height[left] < height[right]) {
      
       mostContainerWater = findTheMostWater(left,right,height[left], mostContainerWater)
       left++
     }else if(height[left] > height[right]) {
       mostContainerWater = findTheMostWater(left,right,height[right],mostContainerWater)
       right--
     }else{
        mostContainerWater = findTheMostWater(left,right,height[left],mostContainerWater)
        left++
        right-- 
     }
     
  }
  return mostContainerWater
};
function findTheMostWater(leftIdx, rightIdx,minLength,mostWater) {
  let distance = Math.abs(leftIdx - rightIdx)
  let calculateArea = minLength * distance
  mostWater = Math.max(mostWater, calculateArea)
  console.log(mostWater, calculateArea)
  return mostWater
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));

