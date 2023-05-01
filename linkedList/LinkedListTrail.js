class Node {
    constructor(element) {
        this.value = element
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
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
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }
    insert(element, index) {
        if (index < 0 || this.size < index) {
            return
        }
        if (index == 0) {
            this.prepend(element)
        } else {
            const node = new Node(element)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    delete(index) {
        if (index < 0 || index >= this.size) {
            return 'Invalid Index'
        }
        let deletedNode
        if (index === 0) {
            deletedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            deletedNode = prev.next
            prev.next = deletedNode.next

        }
        this.size--
        return deletedNode.value

    }
    deleteElement(value) {
        if (this.isEmpty()) {
            return 'list is empty'
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
        } else {
            let deletedNode
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                deletedNode = prev.next
                prev.next = deletedNode.next
                this.size--
            }
            return 'no such value'
        }
    }
    search(value) {
        if (this.isEmpty()) {
            return 'list is empty'
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value == value) {
                return 'value occurs at ' + i + 'th position'
            }
            curr = curr.next
            i++
        }
        return 'no such value found'
    }
    print() {
        if (this.isEmpty()) {
            console.log('empty');
        } else {
            const node = new Node()
            let curr = this.head
            let value = ''
            while (curr) {
                value += `${curr.value} `
                curr = curr.next
            }
            console.log(value);
        }
    }
}
const linkedlist = new LinkedList()
linkedlist.prepend(10)
linkedlist.prepend(20)
linkedlist.append(40)
linkedlist.insert(25, 3)
console.log(linkedlist.search(280));


linkedlist.print()

