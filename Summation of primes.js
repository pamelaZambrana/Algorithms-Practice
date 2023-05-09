/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n. */

/* Algoritmo inicial */

/* function primeSummation(n) {
    let arrOfPrimes = [2];
    if(n>1){
        for(let i=3; i<n; i++){
            let notPrime= arrOfPrimes.some(number=>{
                if(i!==number){
                    return i%number==0
                };
            });
            if(!notPrime){
                arrOfPrimes.push(i);
            };
        };
    }
    return arrOfPrimes.reduce((sum,number)=>(sum+number),0);
  }; */

  /* Algoritmo optimicado: Criba de Eratóstenes */
  function primeSummation(n) {
    let isPrime = new Array(n + 1).fill(true);
    let sum = 0;

    for (let i = 2; i <n; i++) {
      if (isPrime[i]) {
        sum += i;
        for (let j = i * i; j < n; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return sum;
  }
  
  console.log(primeSummation(17));
  console.log(primeSummation(2000000));