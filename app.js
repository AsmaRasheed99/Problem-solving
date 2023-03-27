// recursion function


// 1- Fibonacci Series:
// Write a program to print Fibonacci for a given number.
// The Fibonacci series is a series of numbers in which each is the sum of the two preceding ones, usually starting with 0 and 1. 

function fibonacci(num) {
    if( num < 2) {
        return num;
    }
        return fibonacci(num-1) + fibonacci(num - 2);
    }

// take nth term input from the user
const input = prompt('Enter the number of terms: ');

if(input <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < input; i++) {
        console.log(fibonacci(i));
    }
}



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


function stringReverse(str) {
    if (str.length <= 1){
        return srt;
    }
    var strSplit = str.split("");
    var rev = strSplit.reverse();
    var join = rev.join("");
    return join;


 }
 
 console.log(stringReverse("NOT"));