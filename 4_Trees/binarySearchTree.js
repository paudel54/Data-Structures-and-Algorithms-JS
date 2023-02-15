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
    // inserting new node
    // 1. create newNode
    insert(value) {
        const newNode = new Node(value)
        // 2. incase the tree is empty then add a node
        if (this.root === null) {
            this.root = newNode
            // return this is given here if this case stop code and dont run other lines.  
            return this
        }
        let temp = this.root;
        while (true) {
            // for already existed node to insert
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                // if left branch is open insert and return code
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                // if brach is not open , shift temp pointing to root to next level root
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this;
                }
                temp = temp.right;
            }
        }
    }
}


// creating new tree
let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);

myTree.insert(27);

myTree.insert(52);
myTree.insert(82);
console.log(myTree);