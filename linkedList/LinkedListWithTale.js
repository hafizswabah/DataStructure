class Node {
    constructor(element) {
        this.value = element
        this.next = null
    }
}
class LinkedList{
    constructor(element) {
        this.head = null
        this.tale = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }


    prepend(element) {
        const node = new Node(element)
    
        if (this.isEmpty) {
            this.head = node
            this.tail = node

        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
       
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    removeFromFront() {
        if (this.isEmpty()) {
            console.log('empty');
        } else {
            let value = this.head.value
            this.head = this.head.next
            this.size--
        }
    }
    removeFromLast() {
        if (this.isEmpty()) {
            console.log('empty');
        } else {
            const value = this.tail.value
            if (this.size === 1) {
                this.head = null
                this.tail = null
                this.size--
            } else {
             let prev=this.head
             while(prev.next!==this.tail){
                prev=prev.next
             }
             prev.next=null
             this.tail=prev
             this.size--
            }
        }
    }
    print() {
       
        if(this.isEmpty()) {
            console.log('empty');
        } else {
            const node = new Node()
            let curr = this.head
            let value = ''
            while (curr) {
                value += curr.value + ' '
                curr = curr.next
            }
            console.log(value);
        }
    }
}
const linkedlist=new LinkedList()
console.log(linkedlist.isEmpty()); 
linkedlist.prepend(10)
linkedlist.append(20)
linkedlist.print()