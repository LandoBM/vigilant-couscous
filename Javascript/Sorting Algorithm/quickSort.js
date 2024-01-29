/* Quick Sort

Problem: Given an array of integers, sort the array

const arr = [-6, 20, 8, -2, 4]
should return quickSort(arr)= [-6,-2,4,8,20]

*/

// Using: pick the last element as pivot
function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i =0; i < arr.length -1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

//Using: pick the median element as pivot
function medianQuickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    
    let leftArr = [];
    let rightArr = [];
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < median){
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i]);
        }
    }
    // add the median to the right array
    // right.unshift(median);
    // return [...quickSort(left), ...right];
    return [...medianQuickSort(leftArr), median,...medianQuickSort(rightArr)]
}

const arr = [-6, 20, 8, -2, 4]
console.log(quickSort(arr))
console.log(medianQuickSort(arr))