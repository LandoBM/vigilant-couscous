//Diagonal Difference

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal = 1 + 5 + 9 = 15. 
// The right to left diagonal = 3 + 5 + 9 = 17. 
// Their absolute difference is |15 - 17| = 2.


// Function Description
// Complete the diagonalDifference function in the editor below.
// diagonalDifference takes the following parameter:
// int arr[n][m]: an array of integers

function diagonalDifference(arr){
    let lefttoright = 0
    let righttoleft = 0
    for (let i = 0; i < arr.length; i++){
        lefttoright += arr[i][i]
        righttoleft += arr[i][arr.length - 1 - i]
    }
    return Math.abs(lefttoright - righttoleft)
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]])) // 2
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])) // 15
console.log(diagonalDifference([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])) // 0