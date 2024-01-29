// Merge Sort Algorithm 
//Problem: Given an array of integers, sort the array

// const arr = [-6, 20, 8, -2, 4]
// mergeSort(arr) ==> Should result [-6,-2,4,8,20]


function mergeSort(arr){
    // recursive base case
    if(arr.length < 2){
        return arr
    }
    // create a split in the array to divide the array to two seperate arrays
    const mid = Math.floor(arr.length/ 2)
    // left array will start at index 0 to the mid point
    const leftArray = arr.slice(0, mid)
    // right array will start at mid point to the end of the array
    const rightArray = arr.slice()
    // calling the merge function to MergeSort the left and right arrays until sorted
    return merge(mergeSort(leftArray), mergeSort(rightArray))

}

function merge(leftArray,rightArray){
    // make empty array to began sorting elements
    const sortedArr = []
    // use while loop with length of both left and right arrays
    while(leftArray.length && rightArray.length){
        // compare the left array index 0 to the right array index 0 to take out which ever number in less in 
        // that index
        if(leftArray[0]<= rightArray[0]){
            // add smaller element from left array to the sorted array
            sortedArr.push(leftArray.shift())
        } else {
            // add bigger element from right array to the sorted array
            sortedArr.push(rightArray.shift())
        }
    }
    // after one side is completely added to the sorted array we need to add remaining elements (if
    // any) from either left or right array to complete the sorted array
    return [...sortedArr, ...leftArray, ...rightArray]
}


const arr = [-6, 20, 8, -2, 4]
console.log(mergeSort(arr))

//Big-O ==> O(nlogn) == Best when sorting