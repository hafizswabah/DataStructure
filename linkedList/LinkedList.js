class Node {
    constructor(value) {
        this.value = value
        this.next = null

    } 

}

class linkedlist {
    constructor() {
        this.size = 0;
        this.head = null
    }
    isEmpty() {
        return this.size === 0
    }
    size(){
        return this.size
    }
    preappend(element) {
        const node = new Node(element)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(element) {
        const node = new Node(element)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++

    }
    print() {
        if (this.isEmpty()) {
            console.log('empty');
        } else {
            let value = ''
            let curr = this.head

            while (curr) {
                value += curr.value + ' '
                curr = curr.next
            }
            console.log(value);
        }
    }
}

const LinkedList = new linkedlist
LinkedList.append(10)
LinkedList.append(20)
LinkedList.append(30)
LinkedList.preappend(50)
console.log(LinkedList.size());
console.log(LinkedList.isEmpty());
LinkedList.print()

