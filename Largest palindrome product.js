/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2
-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers. */

function largestPalindromeProduct(n){
    let arrOfNumbers=[];
    let arrOfPalindromes=[1];
    let N=10;
    let i=1;
    do{
        N=N*10;
        i++;
    } while (i<n);

    for(let k=1; k<N;k++){
        for(let i=N-1; i>1; i--){
            const multiple1=`${i}`;
            let multiple2=`${N-k}`
            const product=`${i*(N-k)}`;
            if(multiple1.length==n && multiple2.length==n){
                let arrConfirm=[];
                for(let j=0; j<(parseInt(product.length/2)); j++){
                    
                    if(product[j]==product[product.length-j-1]){
                        arrConfirm.push(true);
                    }else{
                        arrConfirm.push(false);;
                    };
                };
                if ((!arrConfirm.some(confirm=>confirm==false))){
                    arrOfPalindromes.push(product);
                };
            };
        };
    }
    const orderedPalindromes=arrOfPalindromes.sort((a,b)=>{
        return(b-a)
    });
    return parseInt(orderedPalindromes[0]);
};
console.log(largestPalindromeProduct(2));
console.log(largestPalindromeProduct(3));