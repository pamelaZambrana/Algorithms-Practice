/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
though answers with absolute error of up to 10^-4 are acceptable. */

function plusMinus(arr) {
    let numberOfElements = arr.length;
    let positives = 0;
    let negatives = 0;
    let cero = 0;

    for( let i=0; i<numberOfElements; i++){
        const number=arr[i];
        if(number>0){
            positives = positives +1;
        }else if( number<0 ){
            negatives+=1;
        }else{
            cero++;
        };
    };

    console.log((positives/numberOfElements).toFixed(6));
    console.log((negatives/numberOfElements).toFixed(6));
    console.log((cero/numberOfElements).toFixed(6));
};

plusMinus([1,1,0,-1,-1])