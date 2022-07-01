/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var partitionLabels = function(s) {
  let max = [0]
  let min = [Infinity]
  let partition = []
  let cache = {}
  for(let i = 0; i < s.length; i++) {
     if(cache[s[i]])continue
      cache[s[i]] = s[i]
      hendlePartition(i, s.length - 1, s, max, min, partition)
  }
  return partition
};

function hendlePartition(left, rigth, word, max, min, partition) {
  let part = word[left]
  while(rigth >= 0) {
    if(part === word[rigth] && left >= max[0]) {
       min[0] = Math.min(left, rigth)
       max[0] = rigth
       partition.push((max[0] - min[0]) + 1)
       break
    }else if(left < max[0]) {
      if(part === word[rigth]) { 
        max[0] = Math.max(max[0], rigth)
        partition[partition.length - 1] = (max[0] - min[0]) + 1
        break
      }
      
    }
    
    rigth--
  }
   
}
console.log(partitionLabels("ababcbacadefegdehijhklij"))
console.log('****')
console.log(partitionLabels("eccbbbbdec")) 
console.log('****') 
console.log(partitionLabels("caedbdedda"))

