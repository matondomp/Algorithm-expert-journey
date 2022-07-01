
var minWindow = function(s, t) {
    if(s.length == 0 && t.length == 0)return ''
    dictT = {}
    for(let i = 0; i < t.length; i++) {
        dictT[t[i]] = (dictT[t[i]] || 0) + 1
    }
    
    let required = Object.keys(dictT).length
    let filteresS = []

    for(let i = 0; i < s.length; i++){
        if(dictT[s[i]]) {
            filteresS.push([i, s[i]])
        }
    }
    let left = [0], rigth = [0], ans = [Infinity, 0, 0]
    let windowCount = {}, formad = [0]

    while(rigth < filteresS.length) {
       let char = filteresS[rigth][1]
       windowCount[char] = (windowCount[char] || 0) + 1
       if(windowCount[char] === dictT[char]) {
        formad[0] += 1
       }
       findMinWindow(left, rigth, filteresS, dictT, windowCount, ans, formad, required)
       rigth[0]++
    }

  return ans[0] === Infinity ? '' : s.slice(ans[1] , ans[2] + 1)
};

function findMinWindow(left, rigth, filteresS, dictT, windowCount, ans, formad, required) {
 
    while(left[0] <= rigth[0] && formad[0] === required) {
        let char = filteresS[left[0]][1]
        let start = filteresS[left[0]][0]
        let end = filteresS[rigth[0]][0]
        if(end - start + 1 < ans[0]) {
           ans[0] = end - start + 1 
           ans[1] = start
           ans[2] = end
        }
        windowCount[char]--
        if(windowCount[char] < dictT[char]) {
           formad[0]--
        }
        left[0]++
      }
    
}
console.log(minWindow("abc", "b"))
 console.log('------')
console.log(minWindow("a", "a"))
 console.log('------')
 console.log(minWindow("ADOBECODEBANC", "ABC"))
 console.log('------')
 console.log(minWindow("a", "a"))
 console.log('------')
 console.log(minWindow("a", "aa"))