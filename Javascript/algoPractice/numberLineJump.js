// Number Line Jumps
// Difficulty: Easy

// You are choreographing a circus show with various animals. 
// For one act, you are given two kangaroos on a number line ready to jump in the positive direction(i.e, toward positive infinity).
// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location as part of the show.
// Complete the function kangaroo which takes starting location and speed of both kangaroos as input, and return YES or NO appropriately.

//Example 

//x1 =2
//v1 = 1
//x2 = 1
//v2 = 2
//After one jump they are both at x = 3, (x1 + v1 = 2 + 1 = 3 and x2 + v2 = 1 + 2 = 3), so the answer is YES

// Function Description
// Complete the function kangaroo in the editor below.
// kangaroo has the following parameter(s):
// int x1, int v1: starting position and jump distance for kangaroo 1
// int x2, int v2: starting position and jump distance for kangaroo 2

function kangaroo(x1, v1, x2, v2){
    if(v2 > v1){
        return "NO"
    } else if ((x2 - x1) % (v2 - v1) === 0){
        return "YES"
    } else {
        return "NO"
    }
}

console.log(kangaroo(0, 3, 4, 2)); // YES
console.log(kangaroo(0, 2, 5, 3)); // NO