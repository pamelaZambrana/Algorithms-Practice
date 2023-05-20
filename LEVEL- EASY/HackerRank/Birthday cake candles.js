/* You are in charge of the cake for a child's birthday. 
You have decided the cake will have one candle for each year of their total age. 
They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles=[4,4,1,2]
The maximum height candles are 4 units high. There are 2 of them, so return 2. */

function birthdayCakeCandles(candles) {
    let maxHigh = candles[0];
    let counter = 0;
    for(let i = 0; i < candles.length; i++){
        const candleHigh = candles[i];
        if(maxHigh < candleHigh){
            maxHigh = candleHigh;
            counter = 0;
        };
        if (maxHigh == candleHigh){
            counter = counter + 1;
        };
    };
    return counter;
};

console.log(birthdayCakeCandles([3,2,1,3]));
console.log(birthdayCakeCandles([4,4,4,4,4,4]));
console.log(birthdayCakeCandles([4,5,1,6,2,6,4,6]));
