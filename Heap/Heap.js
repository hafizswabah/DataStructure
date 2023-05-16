class MinHeap {
    constructor() {
        this.heap = []
    }
    getLeftChild(parentIndex) {
        return 2 * parentIndex + 1
    }
    getRightChild(parentIndex) {
        return 2 * parentIndex + 2
    }
    getParrent(childIndex) {
        return Math.flood((childIndex - 1) / 2)
    }
    hasLeftChild(index) {
        return this.getLeftChild(index) < this.heap.length
    }
    hasRightChild(index) {
        return this.getRightChild(index) < this.heap.length
    }
    hasParrent(index) {
        return this.getParrent(index) >= 0
    }
    leftChild(index) {
        return this.heap[this.getLeftCh.ild(index)]
    }
    rightChild(index) {
        return this.heap[this.getRightChild(index)]
    }
    parent(index) {
        return this.heap[this.getParrent(index)]
    }
    swap(index1, index2) {
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    preek() {
        if (this.heap.length === 0) {
            return null
        }
        return this.heap[0]
    }
    add(item) {
        this.heap.push(item)
    }
    heapifyup() {
        let index = this.heap.length - 1
        while (this.hasParrent(index) && this.parent(index) > this.heap(index)) {
            let parentIndex = this.getParrent()
            this.swap(parentIndex, index)
            index = parentIndex
        }
    }
    heapifydown() {
        let index = 0
        while (this.hasLeftChild(index)) {
            let smallChildIndex = this.getLeftChild(index)
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallChildIndex = this.getRightChild(index)
            }
            if (this.heap[index] < this.heap[smallChildIndex]) {
                break
            } else {
                this.swap(index, smallChildIndex)
            }
            index = smallChildIndex
        }
    }
    sort() {
        if (this.heap.length === 0) {
            return
        }
        let result = []
        while (this.heap.length != 0) {
            [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
        rewsult.push(this.heap.pop())
        this.heapifydown()
        }
        console.log('result',result);
    }
}
const minHeap=new MinHeap()
minHeap.add(10)
minHeap.add(30)
minHeap.add(20)
console.log(minHeap);
