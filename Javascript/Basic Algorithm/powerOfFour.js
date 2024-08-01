//342. Power of Four

// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.


//Example 1:
// Input: n = 16
// Output true

// Example 2:
// Input: n = 5
// Output: false

function isPowerOfFour (n){
    // base case
    if (n < 1 ){
        return false
    }
    // start while loop
    while(n > 1){
        if (n%4 !== 0){
            return false
        }
        n = n / 4
    }
    return true
}

// Testing 

console.log(isPowerOfFour(16))// true
console.log(isPowerOfFour(5))// false
console.log(isPowerOfFour(1))// true