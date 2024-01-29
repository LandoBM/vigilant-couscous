// Factorial of a Number

/* Problem:
Given an integer 'n', find the factorial
of that integer. 
*/

// The factorial of a non-negative integer 'n', denoted n!, is the product of all
// positive integers less than or equal to n. It can be represented by the formula:
//  n! = n * (n-1) * (n-2) * ...

// function factorial(n){
//     let result = 1
//     for(let i = 2; i <= n; i++){
//         result = result * i
//     }
//     return result
// }

function factorial(n){
    let result = 1
    // start at 2 since multiplying by 1 has no affect
    for (let i = 2; i <= n ; i++){
        result = result * i
    }
    return result
}

function factorial2(n){
    let result = 1
    for(let i = 2; i <= n ; i++){
        result = result * 1
    }
    return result
}



console.log(factorial(4))// 4*3*2*1 = 24
console.log(factorial(5))// 5*4*3*2*1 = 120
console.log(factorial(6))// 6*5*4*3*2*1 = 720
console.log(factorial(10))

console.log(factorial2(10))
console.log(factorial2(20))