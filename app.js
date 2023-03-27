// recursion function


// 1- Fibonacci Series:
// Write a program to print Fibonacci for a given number.
// The Fibonacci series is a series of numbers in which each is the sum of the two preceding ones, usually starting with 0 and 1. 

let x=0;
let y=1;
let z1;
let arr=[0,1];
function Fibonacci(z) {
  if (z === 55) return 
  arr.push(z);
  
     z1=  x+y;
     x=y;
     y=z1;
     Fibonacci(x+y);

  return ;
}

Fibonacci(1) 
console.log(arr) ;



// 2- The sum of Array Elements:
// Write a program that Calculates the sum of
//  elements in an array 


var sum = (array) => {
    if (array.length === 0) {
        return 0;
    }

    return  array[0] + sum(array.slice(1));
}
console.log(sum([1,2,3]));


// 3- Reverse a String:
// Write a program that Reverses a string 

function reverseString(str,length) {
    if (length<0)
    return "" ;
    return str[length]+reverseString(str,length-1);
}
let str ="ASMA";
let leng =str.length-1;
console.log(reverseString(str,leng));



