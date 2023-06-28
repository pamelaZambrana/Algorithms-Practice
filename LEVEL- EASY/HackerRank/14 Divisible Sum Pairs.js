function divisibleSumPairs(n, k, ar) {
    let condition = 0;
    for(let i = 0; i<n-1 ; i++){
        const a = ar[i];
        for(let j = i+1; j<n; j++){
            const b = ar[j];
            if(i < j && (a + b) % k === 0){
                condition++;
            };
        };
    };
    return condition
};

console.log(divisibleSumPairs(6,5,[1,2,3,4,5,6]));
console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]));
