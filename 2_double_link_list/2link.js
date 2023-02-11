// console.log('Welcome to Doubly linked List');
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


    pop() {
        // for an empty node
        if (this.length === 0) return undefined;
        let temp = this.tail;
        // if there contains single node then pop it or assign it null
        if (this.length === 1) {
            this.head == null;
            this.tail == null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    // Add node to the beginning 
    unshift(value) {
        // Creating new node
        const newNode = new Node(value);
        // if the list is empty
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++
        return this;

    }
    // poping node from beginnig of node
    shift(value) {
        if (this.length === 0) return undefined;
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--
        return temp;
    }
    // to get value from a particular index
    get(index) {
        // creating limit for -ve index and out of range index. 
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let temp = this.head;
        // for loop for only 1st half of loop for, efficiency last half we iterate from tail 
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            // interating or searching from tail node for last half node this increases performance and optimized time complexity
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }
    // setting particulr node value
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
    // inserting particlur node value
    insert(index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        // getting the already created get method
        const before = this.get(index - 1);
        const after = before.next;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        this.length++
        return true
    }
    // removing linked list
    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        if (index < 0 || index >= this.length) return undefined;

        const temp = this.get(index);

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;

    }

}




let myDoublyLinkedList = new DoublyLinkedList(0);
// console.log('inital link list before pushing', myDoublyLinkedList);
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
// console.log(myDoublyLinkedList);
