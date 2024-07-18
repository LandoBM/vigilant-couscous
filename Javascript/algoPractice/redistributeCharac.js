/* 1897. Redistribute Characters to Make All Strings Equal

You are given an array of strings words (0-indexed).

In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

Return true if you can make every string in words equal using any number of operations, and false otherwise.

 

Example 1:

Input: words = ["abc","aabc","bc"]
Output: true
Explanation: Move the first 'a' in words[1] to the front of words[2],
to make words[1] = "abc" and words[2] = "abc".
All the strings are now equal to "abc", so return true.

Example 2:

Input: words = ["ab","a"]
Output: false
Explanation: It is impossible to make all the strings equal using the operation.
*/

function makeEqual(words) {
    const charCount = new Array(26).fill(0);
    for (const word of words) {
      for (const char of word) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }
    }
  
    const totalChars = words.reduce((acc, word) => acc + word.length, 0);
    if (totalChars % words.length !== 0) {
      return false;
    }
  
    const avgChars = totalChars / words.length;
    for (const count of charCount) {
      if (count % words.length !== 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(makeEqual(["abc", "aabc", "bc"])); // true
  console.log(makeEqual(["aa", "aa"])); // false
  console.log(makeEqual(["abc", "aabc", "b"])); // false
