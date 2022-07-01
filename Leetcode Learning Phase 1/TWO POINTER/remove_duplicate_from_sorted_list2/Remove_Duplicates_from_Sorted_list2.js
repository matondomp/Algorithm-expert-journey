const { cpuUsage } = require("process")

function removeDuplicates(head) {
  let list = []
  let linked = new LinkedList()
  for(let i = 0 ; i < head.length; i++) {
      linked.insert(head[i])
  }
 let newList =  linked.removeDuplicate(linked.head)
  linked.getNode(newList, list)
  return list
}

function ListNode(val) {
  this.val = (val === undefined ? 0 : val)
  this.next = null
}

function LinkedList() {
  this.head = null
  this.size = 0
}

LinkedList.prototype.insert = function(value) {
  let current = this.head
   if(this.head === null) {
     this.head = new ListNode(value)
   }else {

    while(current.next) {
      current = current.next
    }
    current.next = new ListNode(value)
   }
   this.size++
}

LinkedList.prototype.getNode = function(nodes, newNode) {
   while(nodes) {
     newNode.push(nodes.val)
     nodes = nodes.next
   }
}

LinkedList.prototype.removeDuplicate = function(nodes) {
   
   let prev = new ListNode()
   prev.next = nodes
   let current = prev
   let pointer = nodes
   while(pointer) {
    if(pointer.next && pointer.next.val === pointer.val){
        while(pointer && pointer.next.val === pointer.val) {
          pointer = pointer.next
        }
        current.next = pointer.next
    }else{
      current = pointer
    }
    pointer = pointer.next
   }
  
  return prev.next
}
console.log(removeDuplicates([1,1,1,2,3]));
console.log(removeDuplicates([1,2,3,3,4,4,5]));
console.log(removeDuplicates([2,3]))

