//9. Palindrome Number
// A palindrome number reads the same backward as forward.
// Given an integer x, return true if x is a palindrome and false otherwise

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads the same backward as forward.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: -121 does not read the same backward as forward.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: 10 does not read the same backward as forward.

var isPalindrome = function (x){
    // base case
    if (x < 0){
        return false
    }
    // convert the number to string
    let str = x.toString()
    // reverse the string
    let reversedStr = str.split('').reverse().join('')
    // compare the string with its reverse
    return str === reversedStr
}

console.log(isPalindrome(121))// true
console.log(isPalindrome(-121))// false
console.log(isPalindrome(10))// false