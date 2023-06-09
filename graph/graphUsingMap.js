class Graph {
    constructor() {
        this.map = new Map()
    }
    add(vertex) {
        if (!this.map.has(vertex)) {
            this.map.set(vertex, [])
        }
    }
    insert(vertex, edge, isBirection) {
        if (!this.map.has(vertex)) {
            this.add(vertex)
        }
        if (!this.map.has(edge)) {
            this.add(edge)
        }
        this.map.get(vertex).push(edge)
        if (isBirection) {
            this.map.get(edge).push(vertex)
        }
    }
    display() {
        for (let [key, value] of this.map) {
            console.log(`${key} -> ${value}`);
        }
    }
    search(vertex) {
        if (this.map.has(vertex)) {
            return this.map.get(vertex)
        }
        else {
            return 'nothing found'
        }
    }
    delete(vertex) {
        if (this.map.has(vertex)) {
            const vertices = this.map.get(vertex)
            for (let value of vertices) {
                let vertexes = this.map.get(value)
                const index = vertexes.indexOf(vertex)
                if (index !== -1) {
                    vertexes.splice(index, 1)
                }
            }
            this.map.delete(vertex)
        }
    }
    deapthFirstSearch(start){
        if(!this.map.has(start)){
            return 'nothing'
        }
        const visited=new Set()
        const stack=[start]
        visited.add(start)
        while(stack.length){
            let vertex=stack.pop()
            console.log(vertex);
            let edges=this.map.get(vertex)
      
        for(let item of edges){
            if(!visited.has(item)){
                visited.add(item)
                stack.push(item)
            }
        }
    }
    }
}
let graph = new Graph()
graph.insert('A', 'B', true)
graph.insert('B', 'C', false)
graph.insert('C', 'A', true)
graph.display()
graph.deapthFirstSearch('A')


