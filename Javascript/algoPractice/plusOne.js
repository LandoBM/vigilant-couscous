// 66. Plus One
/*
    You are given a large integer represented as an interger array digits, 
    where each digits[i] is the i'th digit of the integer. The digits are ordered
    from most significant to least significant in left-to-right order. 
    The large integer does not contain any leading 0's

*/

// Increment the large integer by one and return the resulting array of digits

//Example 1:
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123. Incrementing by one gives 123 +1 = 124
// the result should be [1,2,4]

function plusOne (digits) {
    for (let i = digits.length -1; i >= 0; i--){
       if(digits[i]=== 9){
        digits[i] = 0
       } else {
        digits[i]++
        return digits
       }
    }
    digits.unshift(1)
    return digits
}

// testing
console.log(plusOne([1,2,3]))// [1,2,4]
console.log(plusOne([9]))// [1,0]


// Notes 
/*
    1. Loop from the back if the array
        a. if the digits[i] equal to 9 return 0
        b. if the digits[i] not equal to 9, increment the number
    2. Return digits array
    3. After the loop if the number is 9, and change to 0
        a. append 1 to the front of the array
    4. Return the array with the new length. 
    
    Definition: 
    .unshift() method of array adds the specified elements tot he beginning
    of an array and return the new length of the array. 
*/