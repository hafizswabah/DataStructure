class Heap {
    constructor() {
        this.heap = []
    }
    getleftchild(i) {
        return 2 * i + 1
    }
    getrightchild(i) {
        return 2 * i + 2
    }
    getparrent(i) {
        return Math.floor((i - 1) / 2)
    }
    hasparrent(i) {
        return this.getparrent(i) >= 0
    }
    hasleftchild(i) {
        return this.getleftchild(i) < this.heap.length
    }
    hasrightchild(i) {
        return this.getrightchild(i)<this.heap.length
    }
    parrent(i) {
        return this.heap[this.getparrent(i)]
    }
    add(value) {
        this.heap.push(value)
        this.heapfyDown()

    }
    heapfyup() {
        let index = this.heap.length - 1
        while (this.hasparrent(index) && this.heap[this.getparrent(index)] > this.heap[index]) {
            {
                const parrentIndex = this.getparrent(index)
                let temp = this.heap[parrentIndex]
                this.heap[parrentIndex] = this.heap[index]
                this.heap[index] = temp
                index = parrentIndex
            }
        }
    }
    heapfyDown() {
        let index = 0
        while (this.hasleftchild(index)) {
            let smallChildIndex = this.getleftchild(index)
            if (this.hasrightchild(index)&&this.getrightchild(index)<this.getleftchild(index)){
                smallChildIndex=this.getrightchild(index)
            }
            if(this.heap[index]<this.heap[smallChildIndex]){
                break
            }else{
                let temp=this.heap[smallChildIndex]
                this.heap[smallChildIndex]=this.heap[index]
                this.heap[index]=temp
            }
            index=smallChildIndex
        }
    }
    sort(){
        if(this.heap.length!=0){
            return
        }
        let result=[]
        while(this.heap.length!=0){
            [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
            result.push(this.heap.pop())
            this.heapfyDown()
        }
        console.log('result',result);
    }
}

const heap = new Heap()

heap.add(30)
heap.add(10)

heap.add(20)
console.log(heap);
heap.sort()
