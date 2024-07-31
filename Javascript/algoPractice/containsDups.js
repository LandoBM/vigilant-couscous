// 217. Contains Duplicate
/* 
    Given an integer array nums, return true if any value appears at least
    twice in the array, and return false if every element is distinct
*/

//Example 1: 
// Input: [1,2,3,1]
// Output: true

//Example 2:
// Input: [1,2,3,4]
// Output: False

function containsDuplicates(nums){
    //sort the array
    nums.sort((a,b) => a - b)
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
}

// testing
console.log(containsDuplicates([1,2,3,4]))// false
console.log(containsDuplicates([1,2,3,1]))// true

// Notes
/*
    1. Sort the array into descending order
    2. create For Loop 
        a. if nums[i] equals to nums[i+1]
            i. return true
    3. return false
*/
