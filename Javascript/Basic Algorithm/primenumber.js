// Prime Number 
// https://www.hackerrank.com/challenges/prime-number/problem

// Problem : Given a natural number 'n', determine if the number is prime or not

/* Definition:
Prime Number is a natural number greater than 1 that i snot a product of two smaller natural numbers.
*/

function isPrime(n){
    // if n is less than 2, return false since a prime number is greater than 1
    if(n < 2){
        return false;
    }
    // i = 2 since we start there, not anything less
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // % = divisible 
        if(n%i === 0){
            return false;
        }
    }
    return true
}

console.log(isPrime(1))// false
console.log(isPrime(5))// true
console.log(isPrime(4))// false
console.log(isPrime(6))// false
console.log(isPrime(7))// true