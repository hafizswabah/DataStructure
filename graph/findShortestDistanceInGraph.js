class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    shortestDistance(start, end) {
        const visited = {};
        const queue = [[start, 0]];

        while (queue.length > 0) {
            const [node, distance] = queue.shift();
            visited[node] = true;

            if (node === end) {
                return distance;
            }

            for (let neighbor of this.adjacencyList[node]) {
                if (!visited[neighbor]) {
                    queue.push([neighbor, distance + 1]);
                }
            }
        }

        // If end node is unreachable from the start node
        return Infinity;
    }
}

// Example graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

const startNode = 'A';
const endNode = 'E';
console.log(`Shortest distance between ${startNode} and ${endNode}: ${graph.shortestDistance(startNode, endNode)}`);
