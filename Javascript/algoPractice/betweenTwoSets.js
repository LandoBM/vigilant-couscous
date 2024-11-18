// Between Two Sets

// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example
// a = [2, 6]
// b = [24, 36]
// There are two numbers between the arrays: 6 and 12.
// 6 % 2 = 0, 6 % 6 = 0, 24 % 6 = 0 and 36 % 6 = 0 for the first value.
// 12 % 2 = 0, 12 % 6 = 0, 24 % 12 = 0 and 36 % 12 = 0 for the second value.

// Function Description
// Complete the getTotalX function in the editor below.
// getTotalX has the following parameters:
// int a[n]: an array of integers
// int b[m]: an array of integers

function getTotalX(a, b){
    let count = 0
    for(let i = 0; i <= 100; i++){
        if(a.every(int => i % int === 0) && b.every(int => int % i === 0)){
            count++
        }
    }
    return count
}

console.log(getTotalX([2, 4], [16, 32, 96])); // 3
console.log(getTotalX([2, 6], [24, 36])); // 2
