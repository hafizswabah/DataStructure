class Stack{
    constructor(elements){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    isEmpty(){
        return this.items.length===0
    }
    getSize(){
        return this.items.length
    }
    peek(){
        return this.items[this.items.length-1]
    }
    print(){
        console.log(this.items.toString());
    }

}
const stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
console.log(stack.peek());
stack.print()