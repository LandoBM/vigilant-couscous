class Node {
    constructor(value){
        this.value = value
        this.next 
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
    // add element at the start of the list
    prepend(value){
        const node = new Node(value)
        // if the list is empty
        if(this.isEmpty()){
            this.head = node
        } else {
            // if the list is not empty
            // new element added becomes the head of the list
            node.next = this.head
            this.head = node   
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list = new LinkedList()
console.log('List is empty?', list.isEmpty())
console.log('List size', list.getSize())
list.print()

list.prepend(10)
list.print()

list.prepend(20)
list.prepend(30)
list.print()