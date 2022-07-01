
var checkInclusion = function(s1, s2) {
	if(s1.length > s2.length) return false
	 let s1Map = new Array(26).fill(0)
	 let s2Map = new Array(26).fill(0)
 
	 for(let i = 0; i < s1.length; i++) {
		 s1Map[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
		 s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
	 }
	 for(let i = 0; i < s2.length - s1.length; i++) {
		 if(checkPermutation(s1Map, s2Map)) return true
		 s2Map[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)]++
		 s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--
	 
	 }
	 return checkPermutation(s1Map, s2Map)
 };
 
 function checkPermutation(s1Map, s2Map) {
	for(let i = 0; i < 26; i++) {
		if(s1Map[i] !== s2Map[i])
			return false
	}
	 return true
 }

 console.log(checkInclusion("ab", "eidbaooo"))/* 
console.log('-----')
console.log(checkInclusion("ab", "eidboaoo"))
console.log('-----')
console.log(checkInclusion("ab", "eidboaoo"))
console.log('-----')
console.log(checkInclusion("a", "ab")) 

console.log(checkInclusion("adc", "dcda"))  */

 