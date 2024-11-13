// Birthday Cake Candles
// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. 
// Count how many candles are tallest.

// Example
// candles = [4,4,1,3]
// The maximum height candles are 4 units high. 
// There are 2 of them, so return 2.

function birthdayCakeCandles(candles){
    let max = Math.max(...candles)
    return candles.filter(candle => candle === max).length
}

console.log(birthdayCakeCandles([4,4,1,3])); // 2
console.log(birthdayCakeCandles([3,2,1,3])); // 2
console.log(birthdayCakeCandles([1,2,3,4])); // 1
console.log(birthdayCakeCandles([3,3,3,3])); // 4
