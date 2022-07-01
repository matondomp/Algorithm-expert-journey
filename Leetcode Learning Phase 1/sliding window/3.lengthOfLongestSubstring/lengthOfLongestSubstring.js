
var lengthOfLongestSubstring = function(s) {
  if(s.length === 0) return 0
  let rigth = 0
  let left = 0
  let cache = {}
  let max = 1
  
  while(rigth < s.length) {
    if(!cache[s[rigth]]) {
      count++
      cache[s[rigth]] = s[rigth]
    }else {
      left++
      rigth = left
      cache = {}
      cache[s[rigth]] = s[rigth]
    }
    max = Math.max(max, Object.keys(cache).length)
    rigth++
  }
  
  return max
}

//Optimized Two Pointer

var lengthOfLongestSubstring = function(s) {
  let i = 0
  let cache = {}
  let max = 0
  
  for(let j = 0 ;j < s.length; j++) {
    if(cache[s[j]]) {
       i = Math.max(cache[s[j]], i)
    }
    max = Math.max(max, j - i + 1)
    cache[s[j]] = j + 1
    
  }
  
  return max
}

console.log(lengthOfLongestSubstring("dvdf"))
console.log('-----')
 console.log(lengthOfLongestSubstring("abcabcbb"))
console.log('-----')
 console.log(lengthOfLongestSubstring("pwwkew"))
 console.log('-----')
 console.log(lengthOfLongestSubstring(" ")) 
/*console.log('-----')
console.log(minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8])) */
//[2,4,12,12,25,25,25,25,25,26,28,83]