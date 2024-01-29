// Bubble Sort

/* Problem: Given an array of integers, sort the array. */

// ex: 
 
//const arr = [-6, 20, 8, -2, 4]
//bubbleSort(arr)// => should return [-6, -2, 4, 8, 20]

//CODE:
//Ascending
function bubbleSort(arr){
    let swapped 
    do {
        swapped = false
        // go through the array with the for loop
        for(let i = 0; i < arr.length -1; i++){
            // check if the adjacent elements are out of order
            if(arr[i]> arr[i+1]){
            // if adjacent elements are out of order begin the swap
            let temp = arr[i];
            arr[i] = arr[i+1]
            arr[i + 1] = temp;
            swapped = true
            } 
        }
        // if we have encounter a swap, go through the array again for additional swaps until false. 
    } while(swapped)
}

const arr = [8, 20, -2, 4, -6]
bubbleSort(arr)
console.log(arr) // should return [-6, -2, 4, 8, 20]

//Descending

function bubbleSorting(arr){
    let swapped 
    /* We make a new function within our existing one to handle descending sorting.*/
    do {
        swapped = false
        for (let i=1; i < arr.length; i++) {
            /* We start from the second element and compare it against the first element in the array. If
            they're out of order, we perform the swap as usual */
            if (arr[i-1] < arr[i]) {
                let temp = arr[i-1]
                arr[i-1]=arr[i]
                arr[i]=temp
                swapped=true
            }
        }
    } while(swapped)
}

const array = [8, 20, -2, 4, -6]
bubbleSorting(array)
console.log(array)

// Big - O = O(n^2)