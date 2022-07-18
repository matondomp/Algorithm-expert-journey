

var findClosestElements = function(arr, k, x) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
      const midlle = Math.floor((left + right) / 2);
      if(x - arr[midlle] > arr[midlle + k] - x) {
        left= midlle + 1
      } else {
        right = midlle
      }
  }
  return arr.slice(left, left + k);
};
console.log(findClosestElements([1,2,3,4,5], 4, 3))
console.log('---')
console.log(findClosestElements([1,2,3,4,5], 4, -1))