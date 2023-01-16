
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
        console.log(newNode) //Node { value: 7, next: null }
        console.log(this.head) //Node { value: 7, next: null }
        console.log(this.tail) //Node { value: 7, next: null }

    }

    //pushing new node at back of linked list 
    Push(value) {
        const newNode = new Node(value)
        console.log(newNode) //Node { value: 4, next: null }
        console.log(this.head) //7 so if block is not empty skipped.
        //if link list is completely empty, adding a node means the node must be pointed with head and tail to same current node.
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        //if link list is not empty and adding the element onto last node
        else {
            this.tail.next = newNode  //override current obj Node { value: 7, next: null }  value with { value: 4, next: null }
            //here this.tail.next, next came from constructor created obj prop
            console.log(this.tail.next)
            this.tail = newNode //
            console.log(this.tail)
        }
        this.length++
        //console.log(this)
        return this
    }

    Pop() {
        if (!this.head) return undefined //if there is no head onto node or empty list return undefined
        //initally temp and pre points to same node 
        let temp = this.head
        let pre = this.head
        //while loop denotes until and unless next node is present, execute the code
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        //when the loops completes there comes a scenerio that temp points to null or end of list, on that tiem the pre will be assingned to 2nd last node . this provides us advantage by use of pre node
        // pre = is assigned with tail so the last node can be wiped out from the list

        this.tail = pre
        this.tail.next = null
        this.length--
        //for single node presented we need to remove it, and this.length is very handy on this case
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        //take it out of list
        return temp
    }

    //addiong new node at the beginnnig of the list
    Unshift(value) {
        //creating new node to be added
        const newNode = new Node(value)
        //if list is empty or have no single node
        if (!this.head) {
            //head var is pointed to newNode, for single node
            this.head = newNode
            this.tail = newNode
        } else {
            //newNodes points out or creates a link with the , current 1st element of the list
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

}


//created one single node with constructor.
let myLinkedList = new linkedList(7)
myLinkedList.Push(4);
myLinkedList.Push(8);
myLinkedList.Pop();
myLinkedList.Unshift(10);

console.log(myLinkedList);