// Problem: Given an array of 'n' elements and a target element 't', find the index of 
// 't' in the array. Return -1 if the target element is not found

// function findTarget(arr, t){
//     //let arr = [-5, 2,10,4,6]
//     //let t =''
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i]=== t){
//             return i
//         }
//     }
//     return -1
// }

// function findTarget(arr, t){
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i]=== t){
//             return  [i];
//         }
//     }
//     return -1
// }

// console.log(findTarget([-5, 2,10,4,6],10))// 2
// console.log(findTarget([-5, 2,10,4,6], 6))// 4
// console.log(findTarget([-5, 2,10,4,6], -5))// 0
// console.log(findTarget([-5, 2,10,4,6], 20))// -1


//Problem 2: Given an array of 'n' elements and a target element 't', find the index of
// 't' in the array. Return -1 if the target element is not found. The array is sorted in
// ascending order.

let carArray = ['Audi', 'BMW', 'Mercedes', 'Toyota', 'Volkswagen']

function findCar(arr, t){
    for (let i = 0; i < arr.length; i++){
        if(arr[i]=== t){
            return arr[i]
        }
    }
    return -1
}

console.log(findCar(carArray, 'Audi'))// Audi
console.log(findCar(carArray, 'Toyota'))// Toyota
console.log(findCar(carArray, 'Mercedes'))// Mercedes
console.log(findCar(carArray, 'Ford'))// -1
