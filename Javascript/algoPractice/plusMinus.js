//Plus Minus

//Given an array of integers, calculate the fractions of its elements that are
//positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

//Function Description
//Complete the plusMinus function in the editor below.
//plusMinus has the following parameter(s):
//int arr[n]: an array of integers

//Example
//arr = [1, 1, 0, -1, -1]
//There are n = 5 elements, two positive, two negative and one zero. 
//Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. 
//Results are printed as:
//0.400000
//0.400000
//0.200000

function plusMinus(arr){
    let positive = 0
    let negative = 0
    let zero = 0
    for (let i =0; i < arr.length; i++){
        if (arr[i]> 0){
            positive++
        } else if (arr[i] < 0){
            negative++
        }else {
            zero++
        }
    }
    let total = arr.length
    console.log((positive/total).toFixed(6))
    console.log((negative/total).toFixed(6))
    console.log((zero/total).toFixed(6))
}

console.log(plusMinus([1, 1, 0, -1, -1])) // 0.400000, 0.400000, 0.200000
console.log(plusMinus([-4, 3, -9, 0, 4, 1])) // 0.500000, 0.333333, 0.166667
console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0])) // 0.375000, 0.375000, 0.250000