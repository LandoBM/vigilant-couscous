'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getMinimumMoves' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY quantity as parameter.
 */

function getMinimumMoves(quantity) {
    // Write your code here
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const quantityCount = parseInt(readLine().trim(), 10);

    let quantity = [];

    for (let i = 0; i < quantityCount; i++) {
        const quantityItem = parseInt(readLine().trim(), 10);
        quantity.push(quantityItem);
    }

    const result = getMinimumMoves(quantity);

    ws.write(result + '\n');

    ws.end();
}