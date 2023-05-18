/* This is a staircase of size n=4:

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. 
The last line is not preceded by any spaces.

Write a program that prints a staircase of size n. */

function staircase(n) {
    let starCaseArr=[];

    for(let i = 1; i < n+1 ; i++){
        let hashtags = i;
        let blankSpaces = n-i;
        let stair = [];
        for( let j = 0 ; j < blankSpaces ; j++){
            stair.push(" ");
        };
        for( let j = 0 ; j < hashtags ; j++){
            stair.push("#");
        };
        stair.push("\n")
        starCaseArr.push(stair.join(""));
    };
    console.log(starCaseArr.join(""));

};
staircase(4);
staircase(6)

