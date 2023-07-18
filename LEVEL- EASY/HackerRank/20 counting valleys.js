//https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true
/* An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly "steps" steps, for every step it was noted if it was an uphill, U , or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. */
function countingValleys(steps, path) {
    let stepsCounter = 0;
    let valley = 0;
    for (let i = 0; i < steps; i++){
        const step = path[i];
        if(step === "U"){
            stepsCounter++;
            if( stepsCounter === 0){
                valley++;
            };
        }else{
            stepsCounter--;
        };
    };
    return valley;
};
console.log(countingValleys(12,["D","D","U","U","D","D","U","D","U","U","U","D"]));
console.log(countingValleys(8,["U","D","D","D","U","D","U","U"]));
console.log(countingValleys(8,["D","D","U","U","U","U","D","D"]));
