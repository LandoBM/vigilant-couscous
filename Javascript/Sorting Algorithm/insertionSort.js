// Insertion Sorting Algorithm 

// Problem: Given an array of integers, sort the array

//Ascending
function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
       let numberToInsert = arr[i] // unsorted array start at index 1. in the for loop we start at index 1 for insertion
       let j = i - 1 // j is the sorted side of the array. i = index 1 - 1 = index 0
       // j >= 0 to ensure we iterate all the way back to the first index in the array
       // arr[j]> numberToInsert check if the sorted element is greater than the number to insert
       while(j >= 0 && arr[j] > numberToInsert){
        // Shift elements one position forward
        arr[j + 1] = arr[j];
        j--
       }
       arr[j + 1] = numberToInsert // Place numberToInsert into its correct
    }
}

//Descending
function descendInsertion(arr){
    for(let i = 1; i < arr.length -1; i++){
        let numberToInsert = arr[i]
        let j = i - 1
        while(j > 0 && arr[j-1] < numberToInsert) {
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = numberToInsert
    }
}

const arr = [-6, 20, 8, -2, 4]
const array = [-6, 20, 8, -2, 4]
insertionSort(arr)
descendInsertion(array)
console.log(arr)
console.log(array)