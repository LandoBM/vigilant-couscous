// Compare the Triplets
// URL: https://www.hackerrank.com/challenges/compare-the-triplets/problem

// Alice and Bob each created one problem for HackerRank. 
// A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: 
// problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = [a[0], a[1], a[2]], 
// and the rating for Bob's challenge is the triplet b = [b[0], b[1], b[2]].

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

function compareTriplets(a, b) {
    let alice = 0
    let bob = 0
    for (let i = 0; i < a.length; i++){
        if (a[i] > b[i]){
            alice++
        } else if (a[i] < b[i]){
            bob++
        }
    }
    return [alice, bob]
}

console.log(compareTriplets([5,6,7], [3,6,10]))// [1,1]
console.log(compareTriplets([17,28,30], [99,16,8]))// [2,1]
console.log(compareTriplets([1,2,3], [1,2,3]))// [0,0]