// 29. Divide Two Integers
// https://leetcode.com/problems/divide-two-integers/
// Given two integers dividend and divisor, divide two integers without using
// multiplication, division, and mod operator. The interger division should truncate towards
// zero, which means only the integer part of the division is kept, and the fractional part
// For Example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2

// Example 1:
// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333 which is truncated to 3.

// Example 2:
// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/(-3) = -2.33333 which is truncated to -

function divide (dividend, divisor){
    // Check if the divisor is zero
    if (divisor && dividend === 0){
        return 0
    }
    
    
}

// Time Complexity: O(log n)
// Test Cases
console.log(divide(10, 3))// 3
console.log(divide(7, -3))// -2