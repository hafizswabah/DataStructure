/// adjacency list representation


adjacencyList={
    'a':['b'],
    'b':['a','c'],
    'c':['b']
}

console.log(adjacencyList['a']);//we get b because b is connected to a