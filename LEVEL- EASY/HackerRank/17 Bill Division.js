/* Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct. */
//https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true
function bonAppetit(bill, k, b) {
    let sum = 0;
    for(let i = 0; i < bill.length ; i++){
        if(i !== k){
            sum = sum + bill[i];
        };
    };
    const anasBill = sum / 2;
    if(anasBill == b){
        console.log("Bon Appetit");
    }else{
        console.log(b - anasBill);
    }

};
bonAppetit([3,10,2,9],1,12);
bonAppetit([3,10,2,9],1,7);