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
    //Creating Push Method!
    push(value) {
        const newNode = new Node(value);
        // for an empty stack
        if (this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            // a newely formed node , new top pointer var is assigned. 
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    // Pop element form list
    pop() {
        //  check the empty stack 
        if (this.length === 0) return undefined;

        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--
        return temp
    }
}

let myStack = new Stack(7);
myStack.push(9);
myStack.push(11);
myStack.push(2);
console.log(myStack);