class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
        for (let i = 0; i < vertices; i++) {
            this.adjList.set(i, []);
        }
    }

    addEdge(src, dest) {
        this.adjList.get(src).push(dest);
    }

    isCyclic() {
        const visited = new Array(this.vertices).fill(false);
        const recStack = new Array(this.vertices).fill(false);

        for (let i = 0; i < this.vertices; i++) {
            if (this.isCyclicUtil(i, visited, recStack)) {
                return true;
            }
        }
        return false;
    }

    isCyclicUtil(v, visited, recStack) {
        if (!visited[v]) {
            visited[v] = true;
            recStack[v] = true;

            const neighbors = this.adjList.get(v);
            for (const neighbor of neighbors) {
                if (!visited[neighbor] && this.isCyclicUtil(neighbor, visited, recStack)) {
                    return true;
                } else if (recStack[neighbor]) {
                    return true;
                }
            }
        }
        recStack[v] = false;
        return false;
    }
}

// Example usage:
const graph = new Graph(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 3);

if (graph.isCyclic()) {
    console.log("Graph contains a cycle");
} else {
    console.log("Graph does not contain a cycle");
}
