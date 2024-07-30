// 15. 3Sum
// https://leetcode.com/problems/3sum/
// Given an integer array nums, return all the triplets [nums[i], nums[j],
// nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j]
// + nums[k] == 0. The solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: The triplets that sum to 0 are: [-1,-1,2]
// and [-1,0,1].

// Example 2:
// Input: nums = []
// Output: []
// Explanation: There are no triplets that sum to 0.

// Example 3:
// Input: nums = [0]
// Output: []
// Explanation: There are no triplets that sum to 0.

var threeSum = function (nums){
    // create an empty array to push elements into
    let ans = []
    if (nums.length < 2){
        return ans
    }
    // sort the array
    nums.sort((a,b) => a - b)
    for(let i=0; i < nums.length; i+=1){
        // skip duplicates
        if(nums[i]>0) break
        let start = i+1
        let end = nums.length-1
        while(start < end){
            const sum = nums[i] + nums[start] + nums[end]
            if(sum === 0){
                ans.push([nums[i], nums[start], nums[end]])
                start+=1
                end-=1
            }
            if(sum < 0){
                start += 1
            }else{
                end -= 1
            }
        }
    }
    return ans
}

// Test Case
console.log(threeSum([-1,0,1,2,-1,-4])) //
console.log(threeSum([])) //

// Time complexity
// O(n^2)
