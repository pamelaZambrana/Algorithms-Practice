/* There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. */
//https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true
function sockMerchant(n, ar) {
    for(let i = 0; i < ar.length; i++){
        for( j=0; j < n-i-1; j++){
            if(ar[j] > ar[j+1]){
                let temp = ar[j];
                ar[j] = ar[j+1];
                ar[j+1] = temp;
            };
        };
    };
    let i = 0;
    let pair = 0;
    while(i < n){
        let current = ar[i];
        let next = ar[i+1];
        if(current == next){
            pair++;
            i = i+2;
        }else{
            i++;
        }
    }
    return pair;
};
/* ---- better way ---- */
function sockMerchant(n, ar) {
    let socks = {};
    let pairs = 0;
    for (let element of ar) {
        socks[element] = socks[element] + 1 || 1;
        if (socks[element] % 2 === 0) {
            pairs += 1;
        }
    }
    
    return pairs;
   
};

console.log(sockMerchant(7,[5,2,3,1,5,4,2]));
console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(15,[6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]))