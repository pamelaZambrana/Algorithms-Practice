function updateinventory(curInv,newInv){
    let ans=[];
    let orderedAns=[];
    for(let i=0; i<curInv.length;i++){
        const item=curInv[i][1];
        const index=newInv.findIndex(
            element=>element[1]==item
        );
        if(index>-1){
            const quantity=curInv[i][0]+newInv[index][0];
            ans.push([quantity,item]);
        }else{
            ans.push(curInv[i]);
        };
    };
    for(let i=0; i<newInv.length;i++){
        const item=newInv[i][1];
        const index=ans.findIndex(
            element=>element[1]==item
        );
        if(index==-1){
            ans.push(newInv[i]);
        };
    };
    orderedAns=ans.sort((a,b)=>{
        return  a[1] === b[1] ? 0 : a[1] > b[1] ? 1 : -1
    })
    return orderedAns;
};

console.log(updateinventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
console.log(updateinventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));
console.log(updateinventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));


/* function order(arr){
    return (
        arr.sort((a,b)=>{
        return  a === b ? 0 : a > b ? 1 : -1
        })
    )
    
}
console.log(order(["Ana Paula", "Mario", "Carla", "Nando", "Ana Maria", "Coraline"])) */