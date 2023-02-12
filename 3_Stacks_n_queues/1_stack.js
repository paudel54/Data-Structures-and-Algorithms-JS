// console.log('working with stack');

// Creating a Node!
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Createing constructor for stack with new node
class Stack {
    constructor(value) {
        // stack class is calling node class to create first node
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }
}

let myStack = new Stack(11);
console.log(myStack);