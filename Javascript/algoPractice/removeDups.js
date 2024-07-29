// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such 
// that each unique element appears only once. The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.

//Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
/*Change the array nums such that the first k elements of nums contain the unique elements in the order
  they were present in nums initially. The remaining elements of nums are not important as well as the size of nums. */
// return K

//Example 1:
//Input: nums = [1,1,2]
//Output: 2, nums = [1,2,_]
//Explanation: Your function should return k = 2, with the first two elements of nums being
//1 and 2 which are unique and the last element of nums don't care.

var removeDuplicates = function (nums){
    // base case
    if (nums.length === 0){
        return 0;
    }
    let index = 1
    for (let i = 0; i < nums.length -1 ; i++){
        if (nums[i] !== nums[i+1]){
            nums[index] = nums[i+1]
            index++
        } 
    }
    return index
}

console.log(removeDuplicates([1,1,2]))// 2, nums = [1,2,_]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))// 5, nums = [1,2,3,4,_,_,_,_]