function symmetricDifference(a,...b){
    let argument=[a,...b];
    let finalAns=[] ;
    
    for(let i=0; i<argument.length;i++){
        let ans=[];
        let auxiliar=[...finalAns,...argument[i]].sort((a,b)=>{return(a-b)});
    for(let j=0;j<auxiliar.length;j++){
        const item=auxiliar[j];
            if(!(finalAns.some(num=>num==item)&&(argument[i].some((num=>num===item))))){
                if(!(ans.some(num=>num==item))){
                    ans.push(item);
                };
            };
        };
        finalAns=[...ans];
    }
    return finalAns;
};
console.log(symmetricDifference([1,2,3],[2,4]));
console.log("final",symmetricDifference([1,2,3],[2,4],[5,1,3]));
console.log("final",symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
console.log("final",symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));