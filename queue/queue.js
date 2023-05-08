class Queue{
    constructor(){
        this.item=[]
    }
    isEmpty(){
        this.item.length===0
    }
    enqueue(element){
        this.item.push(element)
    }
    dequeue(){
        this.item.shift()
    }
    print(){
        console.log(this.item.toString());
    }
}
const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.print()