
function nextGreatestLetter(letters, target) {
   let left = 0, right = letters.length - 1
   let word = ''
   while(left < right) {
       let middle = Math.floor((right + left) / 2)
       let targetCode = target.charCodeAt(0)
       let current = letters[middle].charCodeAt(0)
       if(current > targetCode) {
          right = middle 
        }else {
          left = middle + 1
        }

   }
    
   let condition = letters[left].charCodeAt(0) <= target.charCodeAt(0)
   if(left >= right && condition) return letters[0]
   return letters[left]
};
console.log(nextGreatestLetter(["c","f","j"], "d"))