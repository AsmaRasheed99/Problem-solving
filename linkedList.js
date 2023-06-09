/* 4- Create a function that takes a LinkedList and deletes the middle node in it and returns it */



class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNode(data) {
    const new_node = new Node(data);
    if (!this.head) {
      this.head = new_node;
      this.tail = this.head;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
    this.length++;
  }

  deleteMiddleNode() {
    if (this.length < 2) {
      return this.head;
    }
    const middle = Math.floor(this.length / 2);
    let prevNode = null;
    let currNode = this.head;
    for (let i = 0; i < middle; i++) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    console.log(prevNode.next );
    prevNode.next = currNode.next;
    
    this.length--;
    return this.head;
  }
  
}

const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.addNode(5);
linkedList.deleteMiddleNode();


console.log(linkedList);


// 5- Create a function that takes a LinkedList and reverses it

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
   
}

class LinkedList0 {
    constructor(head = null) {
        this.head = head;
    } 

   
  
      reverse(node1) {
        var prev = null;
        var current = node1;
        var next = null;
            while (current != null) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            node1 = prev;
            return node1;
        }
        }
let node1 = new LinkedList0(1);
let node2 = new LinkedList0(2);
let node3 = new LinkedList0(3);

node1.next = node2;
node2.next = node3;

let list = new LinkedList0(node1);

console.log(list.reverse(node1));
