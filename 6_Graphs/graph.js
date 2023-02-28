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
}

let myGraph = new Graph();
myGraph.addVertex('B');
myGraph.addVertex('S');
// connecting vertix B and S
myGraph.addEdge("B", "S");
console.log(myGraph)