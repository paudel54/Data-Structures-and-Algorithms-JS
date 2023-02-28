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
}

let myGraph = new Graph();
myGraph.addVertex('B');
myGraph.addVertex('S');
myGraph.addVertex('S');
console.log(myGraph)