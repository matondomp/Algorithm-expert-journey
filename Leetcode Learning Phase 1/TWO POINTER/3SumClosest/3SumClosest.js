/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let closest = Infinity
    let min = [null]
    let getClosest = [Infinity]
    nums.sort((a, b)=> a - b)
    for(let i = 0; i < nums.length; i++) {
      let left = i + 1
      let right = nums.length - 1
      closest = hendleThreeSumClosest(i, left, right, nums, closest, getClosest , min , target)
    }
    return min[0]
};

function hendleThreeSumClosest(Idx, leftIdx, rightIdx, nums, closest, getClosest , min, target) { 
   let sum = 0
   while(leftIdx < rightIdx) {
     sum = nums[leftIdx] + nums[rightIdx] + nums[Idx]
     closest = Math.min(closest, Math.abs(sum - target))
     if(getClosest[0] > closest) {
        getClosest[0] = closest
        min[0] = sum
      }
     if(sum > target) {
      rightIdx--
    }else if(sum < target) { 
      leftIdx++
    }else{
      leftIdx++
      rightIdx--
    }
  }
  return closest
}
console.log(threeSumClosest([-1,2,1,-4], 1));
console.log('---')
//console.log(threeSumClosest([0,0,0], 1));
console.log(threeSumClosest([1,1,1,0],-100))
