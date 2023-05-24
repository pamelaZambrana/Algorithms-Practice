/*https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(findingDistances(apples,a));
    console.log(findingDistances(oranges,b));

    // Write your code here
    function findingDistances(array, treeDistance){
        let fallDistance = 0;
        let counter = 0;
        let inTheHouse = 0;
        while(counter < array.length){
            fallDistance = treeDistance + array[counter];
            if( fallDistance >= s && fallDistance <= t){
                inTheHouse++;
            }
            counter++;
        };
        return inTheHouse;
    };
};
countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);
countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]);