console.log('Welcome to Doubly linked List');
// Node that creates empty single doubly link list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}


class DoublyLinkedList {
    constructor(value) {
        //here newNode is current obj for value 1 that gets passed here  
        const newNode = new Node(value);
        // console.log('sent to node class and returned', newNode);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
        // console.log('newNode', newNode);
    }
    // creating  push method inside class 
    push(value) {
        const newNode = new Node(value)
        console.log('pushed new node', newNode)
        // if the nodes are empty list
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            // console.log('debuuggin')
            // console.log(this.tail);
            //this.tail points out to the current list last node here , 1
            // console.log(this.tail.next);
            this.tail.next = this.tail;
            // console.log(this.tail.next);
            // console.log('this.tail.node store node 1', this.tail.next)
            // only one line diff between singly linked list and double is this arrow connecting. 
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this
    }
}


let myDoublyLinkedList = new DoublyLinkedList(1);
console.log('inital link list before pushing', myDoublyLinkedList);
myDoublyLinkedList.push(2);
console.log(myDoublyLinkedList);