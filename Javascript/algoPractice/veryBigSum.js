// A Very Big Sum

// In this challenge, you are required to calculate and 
// print the sum of the elements in an array, keeping in mind 
// that some of those integers may be quite large.

// Function Description
// Complete the aVeryBigSum function in the editor below.
// It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):
// ar: an array of integers .

// Input Format
// The first line of the input consists of an integer n.
// The next line contains n space-separated integers contained in the array.

function veryBigSum(ar){
    let sum = 0
    for (let i = 0; i < ar.length; i++){
        sum += ar[i]
    }
    return sum
}

console.log(veryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])) // 5000000015