// Mini-Max Sum
// Given five positive integers, find the minimum and maximum values that can be 
// calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two
// space-separated long integers.

// For example, arr = [1, 3, 5, 7, 9]. 
// Our minimum sum is 1 + 3 + 5 + 7 = 16 and
// our maximum sum is 3 + 5 + 7 + 9 = 24.
// We would print
// 16 24

function miniMaxSum(arr){
    let sum = arr.reduce((acc, curr) => acc + curr, 0)
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    console.log(sum - max, sum - min)
}


console.log(miniMaxSum([1, 3, 5, 7, 9])); // 16 24
console.log(miniMaxSum([1, 2, 3, 4, 5])); // 10 14
console.log(miniMaxSum([7, 69, 2, 221, 8974])); // 299 9271
