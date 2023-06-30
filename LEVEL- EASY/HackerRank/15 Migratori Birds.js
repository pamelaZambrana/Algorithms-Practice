/* Given an array of bird sightings where every element represents a bird type id, 
determine the id of the most frequently sighted type. 
If more than 1 type has been spotted that maximum amount, return the smallest of their ids. */
//https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
//It is guaranteed that each type is 1,2,3,4 or 5
function migratoryBirds(arr) {
    let sightedBirds = [
    { type : 1, quantity :0},
    { type : 2, quantity :0},
    { type : 3, quantity :0},
    { type : 4, quantity :0},
    { type : 5, quantity :0},
    ]
     
    for (let i = 0; i < arr.length; i++){
        const type = arr[i];
        switch (type){
            case 1:
                sightedBirds[0].quantity++
                break;
            case 2:
                sightedBirds[1].quantity++
                break;
            case 3:
                sightedBirds[2].quantity++
                break;
            case 4:
                sightedBirds[3].quantity++
                break;
            case 5:
                sightedBirds[4].quantity++
                break;
            default: console.log("error");
        };
    };
    let bird = sightedBirds[0];
    let maxSigth = sightedBirds[0].quantity;
    let minType = sightedBirds[0].type;
    for(let i = 1; i < sightedBirds.length ; i++){
        const quantity = sightedBirds[i].quantity;
        const type = sightedBirds[i].type;
        if(quantity > maxSigth){
            maxSigth = quantity;
            minType = sightedBirds[i].type;
            bird = sightedBirds[i];
        }else if(quantity == maxSigth){
            if(type < minType){
                minType = sightedBirds[i].type;
                bird = sightedBirds[i];
            };
        };
    }
    return bird.type;
};

console.log(migratoryBirds([1,1,2,2,3]));
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))