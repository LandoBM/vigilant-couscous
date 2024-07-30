// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurance of needle in haystack,
// or -1 if needle is not part of haystack.

// Example 1;
// Input: haystack = "hello", needle = "ll"
// Output: 2
// Explanation: The string "needle" appears twice in "haystack", but we return the index
// of the first occurrence only.

//Example 2:
//Input: haystack = "aaaaa", needle = "bba"
//Output: -1
//Explanation: The string "needle" appears nowhere in "haystack", so we return -1

var strStr = function(haystack, needle){
    //base case
    if (needle.length === 0){
        return 0
    }
    // loop through the string
    for (let i = 0; i <= haystack.length - needle.length; i++){
        // check if the substring matches the needle
        if (haystack.substring(i, i + needle.length) === needle){
            return i
        }
    }
    // if no match found return -1
    return -1
}

// test cases
console.log(strStr("hello", "ll")); // 2
console.log(strStr("aaaaa", "bba")); // -1