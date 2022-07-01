/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// time O(n ^ 2) space O(1)
/*  var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0] )
  //return intervals
  let left = 0
  let right = 1
  let idx = 0
  while(right < intervals.length) {
      if(intervals[left][1] >= intervals[right][0] && intervals[left][1] <= intervals[right][1]) {
          intervals[left]=[intervals[left][0], intervals[right][1]]
          intervals.splice(right, 1)
          left--
          right--
      }else if(intervals[left][1] >= intervals[right][0] && intervals[left][1] > intervals[right][1]){
         intervals[left]=[intervals[left][0], intervals[left][1]]
         intervals.splice(right, 1)
         left--
        right--
      } 
    left++
    right++
    idx++
  }
 
  return intervals
}; */

//time O(n)  space O(n)
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0] )
  //return intervals
  let mergedInterval = []
  let currentInterval = intervals[0]
  mergedInterval.push(currentInterval)

  for(let interval of intervals) {
    const [, currentInter] = currentInterval
    const [prevInterval, nextInterval] = interval
    if(currentInter >= prevInterval) {
      currentInterval[1] = Math.max(currentInter, nextInterval)
    }else {
      currentInterval = interval
       mergedInterval.push(currentInterval)
    }
  }
  return mergedInterval
};

 console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]])); 
console.log(merge([[1,4],[0,2],[3,5]]));

