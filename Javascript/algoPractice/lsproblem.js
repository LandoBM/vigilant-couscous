// Linear Search Problem:
// Problem: Create a function to search for a given value in an array

//Example: 
// Input: [1,2,3,4]
// Output: True (if we are searching for number '3')

//Example 2:
// Input: [1,2,3,4]
// Output: False (if we are searching for number '5')

function linearSearch( arr, target){
    
    for(let i = 0; i <= arr.length; i++){
        if(arr[i]=== target){
            return i;
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4], 3))// 2
console.log(linearSearch([1,2,3,4], 5))// -1


function listSearch(list, target){
    for(let i = 0; i < list.length; i++){
        if(target === list[i]){
            return i
        }
    }
    return -1
}

console.log(listSearch(['Audi', 'Rover',  'BMW', 'Chevy'],'Rover')); // 1
console.log(listSearch(['Audi', 'Rover',  'BMW', 'Chevy'],'Mercedes')); // -1
console.log(listSearch(['Audi', 'Rover', 'BMW', 'Chevy'], 'BMW')) // 2