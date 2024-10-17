// Problem: Given a sorted array of 'n' elements and a target element 't',
// find the index of 't' in the array. Return -1 if the target element is not found. 

// Binary Search only works on "sorted" arrays
    // If an array is not sorted use linear search, or you can sort it and use binary


// function binarySearch(arr, t){
//     let leftIndex = 0
//     let rightIndex = arr.length-1;
//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (t === arr[middleIndex]){
//             return middleIndex
//         }
//         if(t < arr[middleIndex]){
//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([-5,2,4,6,10], 10))// 4
// console.log(binarySearch([-5,2,4,6,10], -5))// 0
// console.log(binarySearch([-5,2,4,6,10], 6))// 3
// console.log(binarySearch([-5,2,4,6,10], 20))// -1



// Problem: Given a sorted array of carArray elements and a target element 't',
// find the index of 't' in the array. Return -1 if the target element is not found. 
let carArray = ['Audi', 'BMW', 'Mercedes', 'Toyota', 'Volkswagen']

function binaryCarSearch(arr, target){
    let leftIndex = 0
    let rightArray = arr.length -1
    while(leftIndex <= rightArray){
        let middleIndex = Math.floor((leftIndex + rightArray)/ 2)
        if (target === arr[middleIndex]){
            return middleIndex
        }
        if (target < arr[middleIndex]){
            rightArray = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binaryCarSearch(carArray, 'Audi'))// 0
console.log(binaryCarSearch(carArray, 'Toyota'))// 3
console.log(binaryCarSearch(carArray, 'Mercedes'))// 2
console.log(binaryCarSearch(carArray, 'Ford'))// -1

