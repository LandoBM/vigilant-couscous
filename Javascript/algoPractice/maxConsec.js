// 485. Max Consecutive Ones

// Given a binary array nums, return the maximum 
// number of consecutive 1's in the array.

function findMaxConsecutive ( nums){
    let sum = 0
    let arr = []
    for (i = 0; i < nums.length; i++){
        if (nums[i]=== 1){
            sum++
        } else {
            arr.push(sum)
            sum = 0
        }
    }
    arr.push(sum)
    return Math.max(...arr)
}

console.log(findMaxConsecutive([1,0,1,1,0,1]))//2
console.log(findMaxConsecutive([1,1,0,1,1,1]))// 3