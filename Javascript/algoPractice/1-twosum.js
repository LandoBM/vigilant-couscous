//Two Sum

// Given an  array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: The number 2 and the number 7 sum up to 9.

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]


function  twoSum (nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j< nums.length; j++){
            if( nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6)) ;
console.log(twoSum([3,3], 6)) ;