// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// Easy

// Given a string 's' containing just the characters 
// '(', ')', '{','}','[',']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type
// Note that an empty string is also considered valid.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

var isValid = function(s){
    // const mappings = new Map();
    // mappings.set(')', '(');
    // mappings.set('}', '{');
    // mappings.set(']', '[');

    
    // stack to keep track of opening brackets
    const stack = [];
    let i = 0
    const paren = '() {} []'

    while(i < s.length){
        stack.push(s[i])
        i++
        
        let open = stack[stack.length -2 ]
        let close = stack[stack.length -1 ]

        let potParens = open + close
    }
}

// call the function isValid
console.log((isValid(['()[]{}'])))// true
console.log((isValid(['(]'])))// false

