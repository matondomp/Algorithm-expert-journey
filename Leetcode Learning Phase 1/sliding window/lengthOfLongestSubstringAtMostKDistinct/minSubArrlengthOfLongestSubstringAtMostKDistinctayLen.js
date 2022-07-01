


let lengthOfLongestSubstringKDistinct = function(s, k) {
   // Write your code here
   let n = s.length
   if(n < k + 1) return n
   let left = 0
   let rigth = 0
   let max = 2
   let cache = new Map()
   
   while(rigth < n) {
      
      if(cache.size < k + 1) {
         cache.set(s[rigth], rigth)
         rigth++
      }
      if(cache.size === k + 1) {
        let deleteIdx = Math.min(...cache.values())
         cache.delete(s[deleteIdx])
        left = deleteIdx + 1
      }
      max = Math.max(max, rigth - left)
   }
   return max
  }


  console.log(lengthOfLongestSubstringKDistinct("eceba", 3))
 console.log('-----')
 console.log(lengthOfLongestSubstringKDistinct("WORLD", 4))
 
