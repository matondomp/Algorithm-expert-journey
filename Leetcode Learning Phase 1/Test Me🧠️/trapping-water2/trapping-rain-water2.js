var trapRainWater = function(heightMap) {
  let height = new Array(heightMap[0].length).fill(0)
  let heightMax = new Array(heightMap[0].length).fill(0)
  height[height.length - 1] = heightMap[0][heightMap[0].length - 1]
  let leftMax = [[heightMap[0][0]], [...height]]
  let rightMax = [[heightMap[0][0]], [heightMap[0][0]]]
  let solve = [0]
  let sum = [0]
  let cache = [Infinity]

  for(let i = 0; i < heightMap.length; i++){
    height[heightMap[i].length - 1] = heightMap[i][heightMap[i].length - 1]
    leftMax = [[heightMap[i][0]], [...height]]
    rightMax = [[...heightMax], [...heightMax]]
    rightMax[0][0] = heightMap[i][0]
    rightMax[1][heightMap[i].length - 1] = heightMap[i][heightMap[i].length - 1]

    findWaterTrap(i, leftMax, rightMax, heightMap, sum, solve, cache)
  }
   console.log('sum', sum, cache)
  return sum[0]
};

function findWaterTrap(idx, leftMax, rightMax, height, sum, solve,cache) {
  
  for(let i = 1; i < height[idx].length; i++) {
    leftMax[0][i] = Math.max(leftMax[0][i - 1], height[idx][i])
    for(let k = idx; k < height.length; k++) {
      rightMax[0][i] = Math.max(rightMax[0][i], height[k][i])
    }
  }

  for(let j = height[idx].length - 2; j >= 0 ; j--) {
    leftMax[1][j] = Math.max(leftMax[1][j + 1], height[idx][j])
    for(let l = idx; l >= 0 ; l--) {
      rightMax[1][j] = Math.max(rightMax[1][j], height[l][j])
    }
  }
  let count = 0
  //cache[0] =  height[idx][0]
  for(let item = 0; item < height[idx].length; item++) {
    let min = null
    for(let k = idx; k < height.length; k++) {
      leftMax[0][item] = Math.min(leftMax[0][item], height[k][item])
      console.log(rightMax[0][item])
    }
    min =  Math.min(leftMax[0][item], leftMax[1][item], rightMax[1][item], rightMax[0][item])
    sum[0] += Math.abs(min - height[idx][item])
      
  }
  console.log('ITEMS')
  console.table(height[idx])
  console.log('LEFTMAX')
  console.table(leftMax)
  console.log('RIGHTMAX')
  console.table(rightMax)
  console.log(sum)
}


console.log(trapRainWater([[1,4,3,1,3,2],
                           [3,2,1,3,2,4],
                           [2,3,3,2,3,1]]));
console.log('-----')
console.log(trapRainWater([[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]])); 
console.log('-----')
console.log(trapRainWater([[12,13,1,12],[13,4,13,12],[13,8,10,12],[12,13,12,12],[13,13,13,13]]));   
/**/ /* console.log('----')
console.log('----') 
console.log(trapRainWater([2,0,2]));
console.log('----') 
console.log(trapRainWater([4,2,3])); */



