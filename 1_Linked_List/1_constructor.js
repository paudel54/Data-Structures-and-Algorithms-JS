
//creating node with constructor, defined on class Node.
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor(value) {
        //updates created node to this link list chain
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1

    }

    //pushing new node at back of linked list 
    Push(value) {
        const newNode = new Node(value)
        //if link list is completely empty, adding a node means the node must be pointed with head and tail to same current node.
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        //if link list is not empty and adding the element onto last node
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}



//created one single node with constructor.
let myLinkedList = new linkedList(7)
myLinkedList.Push(4);
console.log(myLinkedList);