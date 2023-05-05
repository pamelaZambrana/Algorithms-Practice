/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number? */

function nthPrime(n) {
    let arrayPrimes=[2];
    let i=3;
    while(arrayPrimes.length<n){
        const prime=arrayPrimes.some(number=>(i%number==0));
        if(!prime){
            arrayPrimes.push(i);
        };
        i=i+1;
    } 
    return arrayPrimes[arrayPrimes.length-1];
}
  
  console.log(nthPrime(6));
  console.log(nthPrime(100));
  console.log(nthPrime(10001));