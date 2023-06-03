/* Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
for more explanation: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=false&h_r=next-challenge&h_v=zen */

function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let countMax = 0;
    let countMin = 0;
    let records = [];
    for( let i = 1; i < scores.length; i++){
        const score = scores[i];
        if(score > max){
            max = score;
            countMax++
        }else if( score < min){
            min = score;
            countMin++;
        };
    };
    records.push(countMax, countMin);
    return records;

};

console.log(breakingRecords([12, 24, 10, 24]));
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));