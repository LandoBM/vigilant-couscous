// Staircase 
// Consider a staircase of size n = 4:
//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to n, 
// and the image is drawn using # symbols and spaces. 
// The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

function staircase(n){
    for (let i = 1; i <= n; i++){
        console.log(" ".repeat(n - i) + "#".repeat(i));
    }
}

console.log(staircase(4));
//    #
//   ##
//  ###
// ####
// undefined
console.log(staircase(6));
//     #
//    ##
//   ###
//  ####
// #####
// ######
// undefined
