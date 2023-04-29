class Node {
    constructor(element) {
        this.value = element
        this.next = null

    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    append(element) {
        const node = new Node(element)
        if (this.isEmpty()) {
           this.head=node
           this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    prepend(element){
        const node=new Node(element)
        if(this.isEmpty()){
            this.head=node
            this.node=node
        }else{
            node.next=this.head
            this.head=node

        }
    }
    print(){
      if(this.isEmpty()){
        console.log('empty');
      }else{
        let curr=this.head
        let value=''
        while(curr){
          value+=curr.value +  ' '
          curr=curr.next
        }
        console.log(value);
      }

    }
}
let linkedlist=new LinkedList()
console.log(linkedlist.isEmpty())
linkedlist.append(10)
linkedlist.prepend(20)
linkedlist.print()