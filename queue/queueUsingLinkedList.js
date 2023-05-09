class Node {
    constructor(data) {
        this.value = data
        this.next = null
    }
}
class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    empty() {
        return this.size === 0
    }
    enqueue() {
     
        if (this.empty()) {
            return -1
        } else {
            this.head = this.head.next
            this.size--

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
    dequeue(data) {
        const node = new Node(data)
        if (this.empty()) {
            this.head = node
            this.tail = node
            this.size++
        } else {
            this.tail.next=node
            this.tail=node
            this.size++
        }
    }
}
const queue = new Queue()




queue.dequeue(10)
queue.dequeue(20)
queue.dequeue(30)
queue.enqueue()
queue.print()