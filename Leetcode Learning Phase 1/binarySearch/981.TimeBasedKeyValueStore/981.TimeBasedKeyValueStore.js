
var TimeMap = function() {
   this.list = new Map()
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
   if(!this.list.has(key)) this.list.set(key, [])
   this.list.get(key).push({value, timestamp})
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
   if(!this.list.has(key)) return ''
   return this.binarySearch(this.list.get(key), timestamp)
};

TimeMap.prototype.binarySearch = (list, timestamp) => {
    let left = 0, right = list.length - 1
    while(left < right) {
       let middle = Math.floor((right + left)/ 2)
      if(list[middle].timestamp < timestamp) {
         left = middle + 1
      }else {
          right = middle
      }
   }
   
   if(list[left] && list[left].timestamp <= timestamp) return  list[left].value
   if(list[left - 1] && list[left - 1].timestamp <= timestamp) return list[left - 1].value
   return ''
}
const timestamp = new TimeMap()
timestamp.set('foo','bar', 1)
console.log(timestamp.get('foo',3))