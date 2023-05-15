class Graph{
    constructor(){
        this.map=new Map()
    }

    addVertex(value){

        this.map.set(value,[])

    }
    insert(vertex,edges,isBiderection){

        if(!this.map.has(vertex)){
            this.addVertex(vertex)
        }

        if(!this.map.has(edges)){
            this.addVertex(edges)
        }

        this.map.get(vertex).push(edges)

        if(isBiderection){
            this.map.get(edges).push(vertex)
        }

        

    }

    search(vertex){
        if(this.map.has(vertex)){
            return this.map.get(vertex)
        }else{
            return null
        }
    }

    display(){
        for (const [key,value] of this.map) {

            console.log(`${key} = ${value}`);
            
        }
    }

    delete(vertex){
        if(this.map.has(vertex)){

            const vetices=this.map.get(vertex)

            // now we get an array that store in vertex

            for(const values of vetices){
                const adjacentVertex=this.map.get(values) //we get the edges of our values in adj

                const index=adjacentVertex.indexOf(vertex)

                console.log(index);


                if(index !== -1){
                    adjacentVertex.splice(index, 1)
                }


            }

            this.map.delete(vertex)

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
