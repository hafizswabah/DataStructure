class MaxHeap {
    constructor() {
        this.heap = []
    }
    getLeftChild(i) {
        return 2 * i + 1
    }
    getRightChild(i) {
        return 2 * i + 2
    }
    getParrent(i) {
        return Math.floor((i - 1) / 2)
    }
    add(value) {
        this.heap.push(value)
        this.heapifyUp()
    }
    hasParrent(i) {
        return this.getParrent(i) >= 0
    }
    parrent(i) {
        return this.heap[this.getParrent(i)]
    }
    heapifyUp() {
        let index = this.heap.length - 1
        while (this.hasParrent(index) && this.parrent(index)<this.heap[index]) {
            let parrentIndex = this.getParrent(index)
            let temp = this.heap[parrentIndex]
            this.heap[parrentIndex] = this.heap[index]
            this.heap[index] = temp
            index = parrentIndex
        }

    }
    add(value) {
        this.heap.push(value)
        this.heapifyUp()
    }
    sort() {
        if (this.heap.length === 0) {
            return
        }
        let result=[]
        while(this.heap.length!=0){
            [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
        result.push(this.heap.pop())
        }
        console.log('result',result);
    }
}
const heap = new MaxHeap()
heap.add(10)
heap.add(20)
heap.add(30)
heap.add(40)
console.log(heap);
heap.sort()