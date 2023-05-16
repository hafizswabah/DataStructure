

class minHeap{

    constructor(){
        this.heap=[]
    }

    getLeftChildIndex(parentIndex){
        return 2*parentIndex+1
    }

    getRightChildIndex(parentIndex){
        return 2*parentIndex+2
    }

    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2)
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index)<this.heap.length
    }

    hasRightChild(index){
        return this.getRightChildIndex(index)<this.heap.length
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0
    }

    leftChild(index){
        return this.heap[this.getLeftChildIndex(index)]
    }

    rightChild(index){
        return this.heap[this.getRightChildIndex(index)]
    }

    parent(index){
        return this.heap[this.getParentIndex(index)]
    }

    swap(index1,index2){
        const temp=this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2]=temp
    }

    peek(){
        // to print first element

        if(this.heap.lengt === 0){
            return null
        }

        return this.heap[0]
    }

    add(item){
        this.heap.push(item)
        this.heapifyUp()
    }


    poll(){
        if(this.heap.length === 0){
            return null
        }

        const item=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown()
    }

    heapifyUp(){
        let index = this.heap.length-1

        while(this.hasParent(index) && this.parent(index)>this.heap[index]){ //> min heap
            const parentIndex=this.getParentIndex(index)

            this.swap(parentIndex,index)
            index=parentIndex

       
        }
    }

    heapifyDown(){
        let index =0

        while (this.hasLeftChild(index)){
            let smallChildIndex = this.getLeftChildIndex(index)

            if(this,this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
                smallChildIndex=this.getRightChildIndex(index)
            }

            if(this.heap[index] < this.heap[smallChildIndex]){
                break
            }else{
                this.swap(index,smallChildIndex)
            }

            index=smallChildIndex
        }
    }

    sort(){

        if(this.heap.length === 0){
            return 
        }

        let result =[]


        while(this.heap.length != 0){

        [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]]
        
        result.push(this.heap.pop())
        this.heapifyDown()
        }

        console.log('result',result);
    }

    
}

const heap=new minHeap()

heap.add(10)

heap.add(30)
heap.add(20)


console.log(heap);
console.log(heap.peek());

heap.sort()