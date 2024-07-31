//58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word
// in the string. 

// A word is a maximal substring consisting of non-soace characters only


// Example 1: 
// Input: s = "Hello World"
// Output: 5 
// Explaination: The last word is "World" with length 5

function lengthOfLastWord(s){
    if(s === 0){
        return 0
    }
    let lastWordCount = 0
    // loop backwards 
    for(let i = s.length -1; i >= 0; i--){
        if (s[i] !== " "){
            for(let j = i; j >= 0; j--){
                if(s[j] !== " "){
                    lastWordCount++
                } else {
                    return lastWordCount
                }
            }
            return lastWordCount
        }
    }
}

//Testing
console.log(lengthOfLastWord("Hello World"))// 5
console.log(lengthOfLastWord('  fly me to the moon  '))// 4

// Notes 
/*
1. create lastWordCount Variable set to zero
2. Loop Backwards s.
    a. Condition if current char is not a space
        i. Loop backwards for current char
            1. Condition if current char is not a space.
                a. increment lasWordCount
            2. Else return LasWordCount
        ii. return lastwordcount
*/