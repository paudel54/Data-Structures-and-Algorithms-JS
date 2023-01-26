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
        const newNode = new Node(value);
        console.log('sent to node class and returned', newNode);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }
}

let myDoublyLinkedList = new DoublyLinkedList(7);
console.log(myDoublyLinkedList);