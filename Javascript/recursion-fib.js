// Fibonacci Sequence - Recursion

// Problem: Given a number 'n', find the nth element in the Fibonacci Sequence

 // The first two numbers in the sequence are both 0 and 1. (0,1,1,2,3,5,8...)

//   function recursiveFibonacci(n){
//     const fib = [0,1]
//     for (let i = 2; i < n; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
//   }

// My Solution 
    // function recursiveFibonacci(n){
    //     if(n === 0){
    //         return 0
    //     } else if(n === 1){
    //         return 1
    //     }else{
    //         let previousNumber = recursiveFibonacci(n-1);
    //         let nextNumber = recursiveFibonacci(n-2);
    //         return previousNumber + nextNumber;
    //         }
    // }

    // Codevolution Solution
    function recursiveFibonacci(n){
        if(n < 2){
            return n;
        }
        return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
    }


  console.log(recursiveFibonacci(0)) // 0
  console.log(recursiveFibonacci(1)) // 1
  console.log(recursiveFibonacci(6)) // 8
  console.log(recursiveFibonacci(7)) // 13