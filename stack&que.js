// 1- Implement a function that returns the minimum element in a stack in constant time complexity.

let stack0 =[];
let count=0;
let min=0;

start=0;
function push(element){
stack0[count]=element;
count++;
console.log(`${element} added to ${count}`);

if(min==0 && start==0){
    min=element;
    start=1;
   }else if(min> element){
    min=element;
  }
    return count -1
 }
 
 push(400)
 push(200)
 push(300)
 
 console.log(`${min} is the minimum element`)


//2-  Given a queue of integers, reverse the order of the elements in the queue.

function reverseQueue(queue) {
    const Arr = [];
    while (queue.length > 0) {
      Arr.push(queue.shift());
    }
    while (Arr.length > 0) {
      queue.push(Arr.pop());
    }
    return queue;
  }


  const queue = [1, 3, 5, 7, 9, 11];
reverseQueue(queue);
console.log(queue); 









//3- Implement a Queue using 2 stacks s1 and s2.


class StackQ3 {

    constructor(){
        this.items = [];
        this.count = 0;
    }
    
    // add element to top of the stack
    push(element) {
        this.items[this.count] = element;
        this.count++;
        console.log(`${element} added to ${this.count}`);
        return this.count -1
    }
    
    // print elements 
    print(){
      return this.items;
    }
    }
    
    const stack1 =new StackQ3();
    const stack2 =new StackQ3();
   
    stack1.push(100);
    stack1.push(200);
    stack1.push(300);
    let s1=stack1.print() 
  
  
    stack2.push(400);
    stack2.push(500);
    stack2.push(600);
    let s2=stack2.print()
  
  // queue elements
      class QueueQ3 {
          constructor() {
              this.items = []
              this.frontIndex = 0
              this.backIndex = 0
          }
          queue(item) {
           this.items.push.apply(this.items, item)
              this.backIndex++
              return item + ' inserted'
          }
  
           printQueue() {
              return this.items;
          }
      }
      const queueQ3 = new QueueQ3()
    
      console.log(queueQ3.queue(s1))
      console.log(queueQ3.queue(s2))
  
    console.log(queueQ3.printQueue())
 



