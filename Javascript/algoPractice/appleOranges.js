// Apples and Oranges - from HackerRank
// You can find the problem here: https://www.hackerrank.com/challenges/apple-and-orange/problem
// Description: Sam's house has an apple tree and an orange tree that yield an abundance of fruit.
// In the diagram below, the red region denotes his house, where s is the start point, and t is the endpoint.
// The apple tree is to the left of his house, and the orange tree is to its right.
// You can assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis.
// A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right.
// Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t])?

// Function Description
// Complete the countApplesAndOranges function in the editor below.
// countApplesAndOranges has the following parameters:
// - int s: starting point of Sam's house location.
// - int t: ending location of Sam's house location.
// - int a: location of the Apple tree.
// - int b: location of the Orange tree.
// - int apples[m]: distances at which each apple falls from the tree.
// - int oranges[n]: distances at which each orange falls from the tree.



function countApplesAndOranges(s, t, a, b, apples, oranges){
    let appleCount = 0
    let orangeCount = 0
    for (let i =0; i < apples.length; i++){
        if (a  + apples [i] >= s && a + apples[i] <= t){
            appleCount++
        }
    }
    for (let i = 0; i < oranges.length; i++){
        if (b + oranges[i] >= s && b + oranges[i] <= t){
            orangeCount++
        }
    }
    console.log(appleCount)
    console.log(orangeCount)
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])); // 1 1
console.log(countApplesAndOranges(2, 3, 1, 5, [2], [-2])); // 1 1
console.log(countApplesAndOranges(2, 3, 1, 5, [2], [-1])); // 1 0
console.log(countApplesAndOranges(2, 3, 1, 5, [2], [-3])); // 0 1

// Time Complexity: O(n) where n is the length of the apples and oranges arrays
// Space Complexity: O(1) - the appleCount and orangeCount variables are constant space

