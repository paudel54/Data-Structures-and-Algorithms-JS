// creating a single node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1
    }

    enqueue(value) {
        const newNode = new Node(value);
        // inCase of empty Node
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    // dequeue, ?LAST IN FIRST OUT SYS
    dequeue() {
        if (this.length === 0) return undefined;
        let temp = this.first;

        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            temp.next = null;
        }
        this.length--
        return temp
    }
}


let myQueue = new Queue(4);
myQueue.enqueue(9);
myQueue.enqueue(7);
myQueue.enqueue(21);
console.log('dequeing the node', myQueue);
// last in first out. 
myQueue.dequeue();
console.log(myQueue);