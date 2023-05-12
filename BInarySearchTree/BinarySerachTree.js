class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.root = node
        }
        else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {

        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    
    }
    searchNode(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else {
                if (value < root.value) {
                    return this.searchNode(root.left, value)
                } else {
                    return this.searchNode(root.right, value)
                }
            }
        }
    }
}
let bst = new BinarySearchTree()
bst.insert(10)

bst.insert(5)
bst.insert(15)

console.log(bst.searchNode(15));


