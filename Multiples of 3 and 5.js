/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of
 these multiples is 23.
Find the sum of all the multiples of 3 or 5 below the provided parameter value number. */
function findMultiplesSum(n){
    let arr=[];
    for(let i=0;i<n;i++){
        if(i%3==0 || i%5==0){
            arr.push(i);
        };    
    }
    const ans=arr.reduce((sum,item)=>{
           return sum=sum+item;
        },0);
    return ans;
}
console.log(findMultiplesSum(10));
console.log(findMultiplesSum(49));
