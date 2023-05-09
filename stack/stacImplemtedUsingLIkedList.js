class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Stack {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    empty() {
        return this.size === 0
    }
    insert(value) {
        const node = new Node(value)
        if (this.empty()) {
            this.head = node
            this.tail = node
            this.size++
        } else {
            this.tail.next = node
            this.tail = node
            this.size++
        }
    }
    print() {
        let value = ''
        let curr = this.head
        while (curr) {
            value += curr.value + ' '
            curr = curr.next
        }
        console.log(value);
    }
    remove() {
        if (this.empty()) {
            return -1
        }
        if (this.size == 1) {
            this.head = null
            this.tail = null
            this.size--
            return 'empty'
        } else {
            let prev = this.head
            while (prev.next != this.tail) {

                prev = prev.next
            }
            console.log(prev);
            prev.next=null
            prev=this.tail
            this.size--
        }
    }

}
const stack = new Stack()
stack.insert(10)
stack.insert(22)
stack.insert(32)
stack.remove()

stack.print()