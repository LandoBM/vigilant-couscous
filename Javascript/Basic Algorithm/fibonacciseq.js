// Problem: Give a number 'n', find the first 'n' elements 
// of the Fibonacci Sequence

// Definition

/* Fibonacci sequence is a sequence in which each number is the sum of the two
preceding ones. The sequence starts with 0 and 1. 
*/

function fibonacci(n) {
    // given starting sequence
    const fib = [0,1]
    // starting sequence begin with calling 2 as n == [0,1], so i start with 2 not 0
    for (let i=2; i<=n; i++) {
    //ex = fib(3)=fib(2) + fib(1) 
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib
 }

 console.log(fibonacci(2))// [0,1]
 console.log(fibonacci(3))// [0,1,1]
 console.log(fibonacci(6))// [0,1,1,2,3,5,8]
 console.log(fibonacci(4))// [0,1,1,2,3 ]

 // Big-O = O(n) // constant, as the value of n increases the number of times line 16 
 // executes also increases. 

 