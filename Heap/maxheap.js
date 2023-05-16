class maxHeap {
    constructor() {
        this.heap = null
    }

    buildHeap(array) {
        this.heap = array
        for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
            this.shiftDown(i)
        }
    }


    shiftDown(currentIndx) {
        let endIndx = this.heap.length - 1;
        let leftIndx = this.leftChild(currentIndx)
        let shiftIndx
        while (leftIndx <= endIndx) {
            let rightIndx = this.rightChild(currentIndx)
            if (rightIndx <= endIndx && this.heap[rightIndx] > this.heap[leftIndx]) {
                shiftIndx = rightIndx
            }
            else {
                shiftIndx = leftIndx
            }
            if (this.heap[shiftIndx] > this.heap[currentIndx]) {
                [this.heap[currentIndx], this.heap[shiftIndx]] = [this.heap[shiftIndx], this.heap[currentIndx]]
                currentIndx = shiftIndx;
                leftIndx = this.leftChild(currentIndx);
            }
            else {
                return
            }



        }
    }


    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        // Swap the root and last elements of the heap
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        // Remove the last element (which is now the original root)
        const root = this.heap.pop();
        console.log(root, "pop");
        // Re-heapify the remaining elements
        this.shiftDown(0);
        // Return the original root
        return root;
    }

    shiftUp(currentIdx) {
        let parentIdx = this.parent(currentIdx)
        while (currentIdx > 0 && this.heap[currentIdx] > this.heap[parentIdx]) {
            [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]]
            currentIdx = parentIdx
            parentIdx = this.parent(currentIdx)
        }
    }

    insert(data) {
        this.heap.push(data)
        this.shiftUp(this.heap.length - 1)
    }


    sort() {
        const result = []
        while (this.heap.length > 0) {
            [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
            result.unshift(this.heap.pop())
            this.shiftDown(0)
        }
        console.log(result, "heap");
    }

    parent(i) {
        return Math.floor((i - 1) / 2)
    }

    leftChild(i) {
        return (2 * i + 1)
    }

    rightChild(i) {
        return (2 * i + 2)
    }

    display() {
        console.log(this.heap);
    }

}

const array = [5, 7, 9, 7, 3, 6, 10, 5, 6, 3];
const list = new maxHeap(array)
list.buildHeap(array)
list.display()

console.log("removed One", list.remove());
list.display()
list.insert(20)
list.display()
list.sort()