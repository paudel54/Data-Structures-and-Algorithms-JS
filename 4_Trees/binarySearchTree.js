console.log('BST');
// creating a node with constructor
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
}
// creating new tree
let myTree = new BST();
console.log(myTree);