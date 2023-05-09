/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n. */

function specialPythagoreanTriplet(n) {
    let arrNum=[];

    for(let a=0; a<n; a++){
        for( let b=0; b<n; b++){
            for( let c=0; c<n; c++){
                if((a+b+c==n)&&(a*a+b*b==c*c)&&(a<b)&&(a<c)&&(b<c)){
                    arrNum.push(a,b,c);
                    return arrNum.reduce((mult,number)=>(mult*number),1);
                };
            }; 
        };
    };
   
   }
   
   console.log(specialPythagoreanTriplet(48));
   console.log(specialPythagoreanTriplet(24));
   console.log(specialPythagoreanTriplet(120));