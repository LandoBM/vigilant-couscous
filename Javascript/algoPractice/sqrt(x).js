// 69. Sqrt(x)

/*
    Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
    The returned integer should be non-negative as well.
    You must not use any built-in exponent function or operator.

    For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/

//Example 1: 
// Input: 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2


function sqrt (x){
    let beg = 0, end = x, ans = 0;
    while ( beg <= end){
        let mid = Math.floor((beg + end)/2)
        if (mid*mid > x){
            end = mid -1
        } else {
            ans = mid
            beg = mid + 1
        }
    }
    return ans
}

//testing the function

console.log(sqrt(4))// 2
console.log(sqrt(8))// 2
console.log(sqrt(10))// 3