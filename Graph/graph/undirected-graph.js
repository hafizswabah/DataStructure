class Graph{
    // to inititalze new adjacency list
    constructor(){
        this.adjacencyList={}
    }

    // to add vertex

    addVertex(vertex){
        // need to check the vertext already exist
        //params is a string that identify vertix
        if(!this.adjacencyList[vertex]){
            //we add the vertex to list its value will be empty list of objects
            this.adjacencyList[vertex]=new Set() //or empty array better perform use set
            //create an entry now
        }
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return  
        }

        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.edgeRemove(vertex,adjacentVertex) //remove all the vetexes that include in the vertices 
        }
        delete this.adjacencyList[vertex]
    }

    edgeRemove(vertex1,vertex2){
        //to remove connection between two vertices
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    // un direct graph
    //this will accept two vertices as parameters
    addEdge(vertex1,vertex2){

        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2) //add is an method of inside set
        this.adjacencyList[vertex2].add(vertex1 ) //undirect of graph
    }

    hasEdge(vertex1,vertex2){
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    display(){

        for(let vertex in this.adjacencyList){
            //can also use for of loop lo literate

            console.log(vertex + '-->'+ [...this.adjacencyList[vertex]]); //using the set so need to spread the element in adjecency list

        }
    }


}

const graph=new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('B','C')

// graph.edgeRemove('A','B')


graph.display()
graph.removeVertex('B')
console.log(graph.hasEdge('A','C'));
graph.display()