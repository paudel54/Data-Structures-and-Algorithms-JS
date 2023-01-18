
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

    shift() {
        // case I if the node is empty
        if (!this.head) return undefined
        //intorduce temp var to break the chian of list
        let temp = this.head
        //changing head pointer to next node to break prev
        this.head = this.head.next
        //breaking up the pointer link
        temp.next = null
        this.length--
        //case III if node is of single element
        if (this.length === 0) {
            this.tail == null
        }
        return temp
    }

    get(index) {
        //we want to prevent that list index not be -ve and overflow the list index 
        if (index < 0 || index >= this.length) {
            return undefined
        }
        //we want to shift the temp var and point to the element that we want to get
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set(index, value) {
        //reusing the get method 
        let temp = this.get(index)
        if (temp) {
            temp.value = value;
            return true
        }
        return false
    }

    insert(index, value) {
        //checking the index of list -ve index and after index
        if (index < 0 || index > this.length) return false
        //incase if the node was to be inserted into the last tail section of list we can use the push method that's already been defined
        if (index === this.length) return this.Push(value)
        //if we want to insert into the beginning we use already defined method unshift here.
        if (index === 0) return this.unshift(value)

        //if the node were to be added in to mid section onto the linked list
        //step-1: Create a new node
        const newNode = new Node(value)
        //taking action with temp var to point into new node and new node to the existed node
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }

    remove(index) {
        //if the item was at beginnig of node to be removed, we apply shift() method , work done
        if (index === 0) return this.shift()
        //if last node were to removed
        if (index === this.length - 1) return this.Pop()
        //if the request were made to remove any node that are out of index return undefined
        if (index < 0 || index >= this.length) return undefined

        //adding into the middle node
        const before = this.get(index - 1)
        const temp = before.next

        //node pointer will skip mid node and point one step ahead
        before.next = temp.next
        temp.next = null
        this.length--
        return temp

    }

    reverse() {
        //initially we must switch head and tail, ny the use of temp var
        let temp = this.head
        this.head = this.tail
        this.tail = temp;

        //creating next and prev var to change pointer direction .\
        //for 1st Node
        let next = temp.next
        let prev = null

        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }



}


//created one single node with constructor.
let myLinkedList = new linkedList(7)
myLinkedList.Push(4);
myLinkedList.Push(8);
myLinkedList.Pop();
// myLinkedList.Unshift(10);
// myLinkedList.shift(); 
console.log('hello');
console.log(myLinkedList.get(1));

console.log(myLinkedList);
myLinkedList.set(0, 10);
//inserting number 12 in the index 1 of link list
myLinkedList.insert(1, 12)
console.log(myLinkedList);