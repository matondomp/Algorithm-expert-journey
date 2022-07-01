


let lengthOfLongestSubstringTwoDistinct = function(s) {
   // Write your code here
   let n = s.length
   if(n < 3) return n
   let left = 0
   let rigth = 0
   let max = 2
   let cache = new Map()
   
   while(rigth < n) {
      
      if(cache.size < 3) {
         cache.set(s[rigth], rigth)
         rigth++
      }
      if(cache.size === 3) {
        let deleteIdx = Math.min(...cache.values())
         cache.delete(s[deleteIdx])
        left = deleteIdx + 1
      }
      max = Math.max(max, rigth - left)
   }
   return max
  }


  console.log(lengthOfLongestSubstringTwoDistinct("eceba"))
 console.log('-----')
 console.log(lengthOfLongestSubstringTwoDistinct("aaabbbb")) 
 console.log(lengthOfLongestSubstringTwoDistinct("ababacccccc"))
 console.log(lengthOfLongestSubstringTwoDistinct("abc")) 
 console.log(lengthOfLongestSubstringTwoDistinct("cabacbbbabbb"))
