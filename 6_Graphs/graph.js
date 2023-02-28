//   Creating Adjacency  List 

// {
//     A: ["B", "E"]
//     B: ["A", "C"]
//     C: ["B", "D"]
//     D: ["D", "E"]
//     E: ["A", "D"]
// } 

class Graph {
    // Constructor creates an empty object
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            // creates vertex
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }
    // adding Edges:
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            // push it as a value
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true
        }
        return false
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
            return true
        }
        return false
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;
        while (this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, temp)
        }
        delete this.adjacencyList[vertex];
        return this
    }
}

let myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');

// connecting vertix B and S
myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C")
myGraph.addEdge("C", "A")
// on removing the node or vetex it also removes the edges:
// myGraph.removeVertex("C");

// uncomment to check out the function  b
// myGraph.removeEdge("A", "B")
console.log(myGraph)