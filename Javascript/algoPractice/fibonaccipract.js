//Problem: Triple step
//URL: https://leetcode.com/problems/triple-step/
// A child  is running up a staircase with n steps and can climb either 1 step, 2 steps, or 3 steps at a time. 
// Implement a method to count how many possible ways the child can run up the stairs

//Fibonacci formula: fib[i]= fib[i-1]+fib[i-2]
// Recursion and Dynamic Programming

function fibonacci(n){
    if(n === 0){
        return n
    }
    const fib = [0,1]
    for(let i = 2; i <= n; i++){
        fib[i] = fib[i-1]+ fib[i-2]
    }
    return fib
}

console.log(fibonacci(100))