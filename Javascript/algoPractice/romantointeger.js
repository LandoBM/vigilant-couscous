// 13. Roman To Integer
// https://leetcode.com/problems/roman-to-integer/
// https://www.youtube.com/watch?v=8u4wv0Q6l7w

// https://dev.to/urfan/leetcode-roman-to-integer-with-javascript-1g3n

// Roman numerals are represented by seven different symbols I, V, X,L, C, D and M
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together
// 12 is written as XII, which is simply X + II. The number 27 is
// written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as
// IV. Because the one is before the five we subtract it making four. The same
// principle applies to the number nine, which is written as IX. There are six
// instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. This is called "subtractive notation".
// X can be placed before L (50) and C (100) to make 40 and 90. This is called "subtractive notation".
// C can be placed before D (500) and M (1000) to make 400 and 900. This is called "subtractive notation".

// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.


var romanToInt = function(s) {
    // Mapping each symbol to it's value
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    // Initialize the result to 0
    let result = 0;
    // Loop through the string
    for (let i = 0; i < s.length; i++) {
        const curr = map[s[i]]
        const next = map[s[i + 1]]
        // If the current symbol is less than the next symbol
        // then subtract the current symbol from the result
        if (curr < next) {
            result -= curr
        } else {
            // Otherwise add the current symbol to the result
            result += curr
        }
    }
    return result
}


// call the function
console.log(romanToInt('III')) // 3
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
