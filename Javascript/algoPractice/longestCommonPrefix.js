//14. Longest Common Prefix 
// Write a function that takes a list of strings as input and returns the longest common prefix among
// an array of strings

// if there is no common prefix, return an empty string

// Example 1:
// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: ["dog","racecar","car"]
// Output: ""

function longestCommonPrefix(strs) {
    // case for string length if equals to zero
    if (strs.length === 0){
        return "";
    }
    // prefix of the shortest element
    strs.sort((a,b) => a.length - b.length)
    const shortest = strs.pop()
    let i = 0
    for (; i< shortest.length; i++){
        const prefix = shortest.substring(0, i+1)
        if(!strs.every(s=> s.startsWith(prefix)))
            break
    }
    return shortest.substring(0, i)
}


//test cases
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""