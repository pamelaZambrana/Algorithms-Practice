/* There will be two arrays of integers. Determine all integers that satisfy the following
 two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist. 

https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true
*/
function getTotalX(a, b) {

    let conditionsChecked = 0; 
    function forChecker(array,num, counter, conditionNum){
        for(let i = 0; i < array.length ; i++){
            const item = array[i];
            let condition = num % item;
            if(conditionNum !== 1){
                condition = item % num;
            };
            if(condition == 0){
                counter++;
            };
        };
        return counter;
    };
    function conditionChecker(counter,condition,array){
        if(counter == array.length){
            condition = true;
        }else{
            condition = false;
        };
        return condition;
    };
    
        for(let number = 1; number < b[b.length-1] +1; number++){

            let itemCounter = forChecker(a,number,0, 1);
           const firstCheck = conditionChecker(itemCounter, false, a);

            if(firstCheck){
                let secondItemCounter = forChecker(b,number,0,2);
                const check = conditionChecker(secondItemCounter,false,b);
                if( check ){
                    conditionsChecked++;
                };
            };

        };
        return conditionsChecked;
};
console.log(getTotalX([2,6],[24,36]));
console.log(getTotalX([2,4],[16,32,96]));
console.log(getTotalX([5,10],[30,50,100]));