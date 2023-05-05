function sumSquareDifference(n) {
    let sumNumberSquare=0;
    let sumSquare=0;
    
    for(let i=1; i<n+1;i++){
        sumSquare=sumSquare+i;
        let numberSquare=i*i;
        sumNumberSquare=sumNumberSquare+numberSquare;
    }
    sumSquare=sumSquare*sumSquare;
    return sumSquare-sumNumberSquare;
};
  
  console.log(sumSquareDifference(100));