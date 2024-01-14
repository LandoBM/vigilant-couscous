// Factorial - Recursion

// Problem: Given an integer 'n', find the factorial of that integer
// Factorial of zero is 1

// Factorial(4) = 4*3*2*1 = 24
// Factorial(6) = 6*5*4*3*2*1 = 720

function recursiveFactorial(n){
    if(n < 2){
        return 1;
    }
    return n * recursiveFactorial(n-1) 
}

console.log(recursiveFactorial(0))// 1
console.log(recursiveFactorial(1))// 1
console.log(recursiveFactorial(4))// 24
console.log(recursiveFactorial(6))// 720
