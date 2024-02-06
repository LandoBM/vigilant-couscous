//Cartesian Product

//Problem: Given two finite non-empty sets, 
// find their Cartesian Product

// In math, specifically set theory, the Cartesian Product
// of two sets A and B is a set consisting of all possible pairs (a, b)
// where "a" is in A and "b" is in B. The Cartesian product
// of an empty set with any other set is the empty set;
// if either set is empty, then so is the Cartesian product.


function cartProd(arr1, arr2){
    let result = [];
    for(let i=0; i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++) {
            let pair = [arr1[i], arr2[j]];
            result.push(pair);
        }
    }
    return result;
}

const arr1 = [1,2]
const arr2 = [3,4,5]
console.log(cartProd(arr1, arr2))

// Big O =  O(n*m), n and m are lengths of input arrays respectively