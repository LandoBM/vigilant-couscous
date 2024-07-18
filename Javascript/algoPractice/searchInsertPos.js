// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not return the index where it would be if it were inserted in order.

// You must write an algorithm with 0(log n ) runtime complexity 


var searchInsert = function(nums, target){
    let temp =  nums[0];
    for(let i = 1; i < nums.length; i++){
        if (target <= nums[i]){
            return i;
        }
        temp = nums[i]
    }
   return nums.length;
}

console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([4,5,7,9], 9)) ;// 3
console.log(searchInsert([1,3,5,6], 7)); // 4 