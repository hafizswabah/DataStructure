class Graph{

    constructor(){
        this.map= new Map()
    }

    add(vertex){
        if(!this.map.has(vertex)){
            this.map.set(vertex,[])
        }
        // this.map.set(vertex,[])
    }

    insert(vertex,edges,isBidirection){
        if(!this.map.has(vertex)){
            this.add(vertex)
        }
        if(!this.map.has(edges)){
            this.add(edges)
        }

        this.map.get(vertex).push(edges)

        if(isBidirection){
            this.map.get(edges).push(vertex)
        }
    }

    search(vertex){
        if(this.map.has(vertex)){
            return this.map.get(vertex)
        }

        else{
            return null
        }
    }

    

    delete(vertex){

        if(this.map.has(vertex)){
            const vertices=this.map.get(vertex)


            for(const value of vertices){
                let vertexes=this.map.get(value)

                const index=vertexes.indexOf(vertex)

                if(index !==-1){
                    vertexes.splice(index,1)
                }
            }

            this.map.delete(vertex)
        }
    }

    dfs(start){

        if(!this.map.has(start)){
            return null
        }

        const visited = new Set()
        const stack=[start]

        visited.add(start)

        while(stack.length>0){

            let vertex = stack.pop()
            console.log(vertex);

            let edges= this.map.get(vertex)
            

            for(const item of edges){
                if(!visited.has(item)){
                    visited.add(item)
                    stack.push(item)
                }
            }
        }
    }

    display(){
        for(const [key,value] of this.map){

            console.log(`${key} = ${value}`);

        }
    }
}

const graph=new Graph()

graph.insert(30,50,true)
graph.insert(30,80,false)
graph.insert(25,100,true)

graph.display()

console.log(graph.search(30));

graph.delete(25)
graph.display()