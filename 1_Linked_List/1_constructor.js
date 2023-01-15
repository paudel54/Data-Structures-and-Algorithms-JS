
//creating node with constructor, defined on class Node.
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1

    }
}

//created one single node with constructor.
let myLinkedList = new linkedList(4)
console.log(myLinkedList);