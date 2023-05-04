/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n? */
function smallestMult(n) {
    let primes=[2];
    let product=2;

    for(let i=3; i<n+1;i++){
        const confirm = primes.some(item=>{
            if(item!==i && i%item==0 ){
                return item;
            }
        });
        if(!confirm){
            primes.push(i);
            product=product*i;
        };
    };

    for(let i=n; i>2;i--){
        if(product%i!==0){
            let number=1;
            while((product*number)%i!==0){
                number++;
            };
            product=product*number;
        }else{
            continue;
        }
    }
    return product;
  }
  
 console.log(smallestMult(10));
  console.log(smallestMult(20));