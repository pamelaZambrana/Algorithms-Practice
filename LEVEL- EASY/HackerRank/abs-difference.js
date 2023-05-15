/* Given a square matrix, calculate the absolute difference between the sums of its diagonals. */

function diagonalDifference(arr) {
    let sum1=0;
    let sum2=0;
    let N=arr.length;
    for(let i=0;i<N;i++){
        sum1=sum1+arr[i][i];
        sum2=sum2+arr[i][N-1-i];
    };

    let absDifference=sum1-sum2;
    if(absDifference<1){
        absDifference=absDifference*-1;
    };
    return absDifference;
}

console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]));