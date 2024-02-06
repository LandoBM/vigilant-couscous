// Tower of Hanoi:
// The Tower of Hanoi is a classic puzzle which consists of three rods and n
//  disks of different sizes which can slide onto any rod. The goal of this puzzle
//  is to move the entire stack to another rod, obeying the following simple rules:

//  1) Only one disk can be moved at a time.
//  2) Each move consists of taking the upper disk from one of the stacks and placing it
//     on top of another stack or on an empty rod.
//  3) No larger disk may be placed on top of a smaller disk.

// Write a program that prints the steps required to solve the Tower of Hanoi problem for
// n number of disks using recursion.

function towerOfHanoi(n, fromRod, toRod, usingRod){
    // n = number of disk
    if( n === 1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

console.log(towerOfHanoi(3,'A','C','B')) 