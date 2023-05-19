/* Work out the first ten digits of the sum of the following one-hundred 50-digit numbers. */
function largeSum(arr) {
    let sum=0;
    for(let i=0; i<arr.length; i++){
      const number=arr[i]*1;
      sum=sum+number;
    };
    sum = sum.toString();
    console.log(sum);
    const tenDigits=[];
    let j = 0;
    while(tenDigits.length<10){
        if(sum[j]!=="."){
        tenDigits.push(sum[j]);
        };
        j++;
    }
    return parseInt(tenDigits.join(""));
  };

  const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
  ];
  
  console.log(largeSum(testNums));