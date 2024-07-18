// 326. Power of Three

// Given an integer n, return true if it is a power of three.
// Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n === 3X


//Example 1: 
//Input: 0
//Output: false
//Explanation: 0 cannot be a power of 3 because 0 is not

//Example 2:
//Input : n = 27
//Output: true
//Explanation: 27 = 3^3

//Example 3:
//Input : n = -1
//Output: false
//Explanation: There is no x where 3^3 = (-1)

function powerOfThree(n) {
   if (n < 1){
    return false
   } 
   while (n > 1){
    if(n % 3 !== 0){
        return false
    }
    n = n / 3
   }
   return true
}

console.log(powerOfThree(0)); //false
console.log(powerOfThree(27)); //true
console.log(powerOfThree(-1)); //false
