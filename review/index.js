class Graph{
    constructor(){
        this.map=new Map()
    }
    add(vertex){
        if(!this.map.has(vertex)){
            this.map.set(vertex,[])
        }
    }
    insert(vertex,edge,isBirection){
        if(!this.map.has(vertex)){
            this.add(vertex)
        }
        if(!this.map.has(edge)){
            this.add(edge)
        }
        this.map.get(vertex).push(edge)
        if(isBirection){
            this.map.get(edge).push(vertex)
        }
    }
    display(){
        for(let [key,value] of this.map){
            console.log(`${key}->${value}`);
        }
    }
   
}

let graph = new Graph()
graph.insert('A', 'B', true)
graph.insert('B', 'C', false)
graph.insert('C', 'A', true)
graph.display()