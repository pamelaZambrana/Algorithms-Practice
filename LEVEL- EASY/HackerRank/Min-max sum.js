/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers. */
/* -------------Función inicial------------ */
/* function miniMaxSum(arr) {
    let totalSum=0;
    totalSum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    let sumArr=[totalSum-arr[0], totalSum-arr[1], totalSum-arr[2], totalSum-arr[3], totalSum-arr[4]];

    let max = sumArr[0];
    let min = sumArr[0];
    for(let i=0; i<sumArr.length ; i++){
        const number = sumArr[i];
        if(max-number < 0) {
            max = number;
        } else {
            min = number;
        }
    };
    console.log(min, max);
}; */
/* -------------Función optimizada------------ */
function miniMaxSum(arr) {
    let totalSum=0;
    let max = arr[0];
    let min = arr[0];
    for(let i=0; i<arr.length ; i++){
        const number = arr[i];
        totalSum = totalSum + arr[i];
        if(number > max) {
            max = number;
        } else if(number < min) {
            min = number;
        }
    };

    console.log(totalSum - max, totalSum - min);
};

miniMaxSum([2,3,1,7,8]);
miniMaxSum([1,3,5,7,9]);
