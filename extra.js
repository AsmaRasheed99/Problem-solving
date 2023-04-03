// const f = function(n) {
//     const max = n;
 
//     const triangle = function(i) {
//         if (i > max) { return; }
 
//         let s = ' ';
//         s += ' '.repeat(max - i);
//         s += '*'.repeat(i*2-1);
//         console.log(s);
//         triangle(i+1);
//     };
 
//     triangle(1);
// };
 
// f(5);




// 2nd 

function numPow(num, exp){
    if (exp === 0) {
return num = 1;

    }
let result = Math.pow(num, exp);
   return result
}

console.log(numPow(5,2));
console.log(numPow(5, 0));
console.log(numPow(3, 7));