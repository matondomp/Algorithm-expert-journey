
const characterReplacement = function (s, k) {
	let res = 0, maxf = 0;
	const map = {};
	for (let start = 0, end = 0; end < s.length; end++) {
		map[s[end]] = (map[s[end]] || 0) + 1;
		maxf = Math.max(maxf, map[s[end]]);
		if (end - start + 1 - maxf > k) map[s[start++]]--;
		res = Math.max(res, end - start + 1);
	}
	return res;
};


  console.log(characterReplacement("AABABBBBBBA", 1))
 console.log('-----')

 console.log(characterReplacement("AABABBA", 1))
 console.log('-----')

 console.log(characterReplacement("ABAB", 2))
 