// Climbing Staircase: 

// Problem: Given  a staircase with n steps, 
// count the number of distinct ways to climb to the top.
// You can either climb 1 step or 2 steps at a time. 

function climbingStaircase(n){
    const nOfWay = [1,2]
    for(let i = 2; i <= n; i++){
        nOfWay[i] = nOfWay[i-1]+ nOfWay[i-2]
    }

    return nOfWay[n-1]
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))

//Big O =  O(n) because we are using a loop that runs 'n' times