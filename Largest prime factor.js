/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number? */

function largestPrimeFactor(number) {
    let factors=[];
    let number2=number;
    let i=2;
    while(number2>1){
        if(number2%i===0){
            factors.push(i);
            number2=number2/i;
        }else{
            i++;
        };
    };
    
    return factors[factors.length-1]
  };
  
  console.log(largestPrimeFactor(600851475143));
  console.log(largestPrimeFactor(10));