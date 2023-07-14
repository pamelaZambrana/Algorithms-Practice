/* https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true */
function pageCount(n, p) {
    const midPoint = n/2;
    let counter = 0;
    let i = 0;

    if( midPoint - p>= 0){
        if(p%2 !== 0){
            i = 1;
        };
        while(i < p ){
            counter++;
            i = i+2;
            console.log(i)
        };
    }else{
        if(n %2 > 0){
            i = n-1;
        }else{
            i = n;
        };
        while ( i > p){
            counter++;
            i = i-2;
        };
    };
    console.log(counter);
    return counter;

};
pageCount(21235,16);
pageCount(2,1);
pageCount(6,2);
pageCount(5,4);
pageCount(12,4);