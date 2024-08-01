// 136. Single Number
/*
    Given a non-epty array of integers nums, every element appears twice except for one.
    Find that single one. 
    YOu must implement a solution with a linear solution with a linear runtime complexity and use only constant extra space. 
*/

//Example 1:
// Input: nums = [2,2,1]
// Output: 1


function singleNumber(nums){
    // sort the array with a copy of the array
    let arr = nums.sort((a,b) => a-b)
    for (let i = 0; i <=nums.length -1; i+= 2){ // iterate by 2
       if(arr[i] !== arr[i+1]){
        return arr[i]
       }
    }
    return arr[arr.length -1] // return the first non-matched pair
}

// Testing
console.log(singleNumber([2,2,1]))// 1
console.log(singleNumber([4,1,2,1,2]))// 4
console.log(singleNumber([100]))// 1