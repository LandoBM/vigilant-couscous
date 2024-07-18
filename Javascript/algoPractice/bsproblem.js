// Problem: Binary Search 
// Given a sorted (in ascending order) integer array num of n elements and a target value, 
// write a function to search target in num. 
// If target exist, then return it's index, otherwise return -1

//Example:
// Given num = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in num and it's index is 4

// Given  num = [-1,0,3,5,9,12], target =  2
// Output: -1
// Explanation: 2 does not exist in num so we return -1

function carSearch(list, target){
    let left = 0
    let right = list.length -1 

    while (left <= right){
        const mid = Math.floor((left + right)/ 2)
        if(target === list[mid]){
            return mid
        }
        if(target < list[mid]){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1 
}

console.log(carSearch(['Audi', 'Land Rover', 'Benz', 'Chevy', 'Ford'], 'Land Rover'))//1
console.log(carSearch(['Audi', 'Rover', 'Benz', 'Chevy', 'Ford'], 'Ford'))//4
console.log(carSearch(['Audi', 'Rover', 'Benz', 'Chevy', 'Ford'], 'Nissan'))// -1
console.log(carSearch(['Audi', 'Rover', 'Benz', 'Chevy', 'Ford'], 'Chevy'))//3



// function bs(num, target){
//     let left = 0
//     let right = num.length - 1

//     while (left <= right){
//         let mid = Math.floor((right + left)/2)
//         if(num[mid]  === target) {
//             return mid
//         }
//         if(target < num[mid]){
//             right = mid - 1;
//         }else{
//             left = mid + 1
//         }
//     }
//     return -1
// }

// console.log(bs([-1,0,3,5,9,12], 9))// 4
// console.log(bs([-1,0,3,5,9,12], 2))// -1