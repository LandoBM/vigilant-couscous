Pseudo-code: Binary Search 

1. If the array is empty, return -1 as the element cannot be found

    - example: 
    - function binarySearch(arr, t){
        - if (left > right){
            - return -1
        - }
    }

2. If the array has elements, find the middle element in the array. If the target is equal to the middle element, return the middle element index. 

    - example:
    - let arr = [2,4,6,8,10]
    - function binarySearch(arr, t){
        - let middleIndex = Math.floor((left + right)/ 2)
        - if(t === arr[middleIndex]){
            - return middleIndex
        - }
    - }

3. If target is less than middle element, binary search the left half of the array. 

    - example:
    - if (target < arr[middleIndex]){
        - right = middleIndex -1
    - } 
    - If the target is greater than the middle element, binary search the right half of the array
    - else {
        - left = middleIndex +1
    - }