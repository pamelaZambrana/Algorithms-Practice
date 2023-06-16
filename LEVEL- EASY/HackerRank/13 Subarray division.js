/* Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate. 
*https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=false
*/

function birthday(s, d, m) {
    let counter = 0;
    if(s.length > 1){
        for(let i = 0; i < s.length - m + 1; i++){
           // console.log(s[i]);
            let sum = 0;
            let group = m;
            let j = i;
            //console.log(s[j])
            while(group > 0){
                console.log(sum, s[j]);
                sum = sum + s[j];
                j++;
                group--;
            };
            console.log("sum",sum);
            if(sum == d){
                counter++;
            };
        };
    }else{
        if(s[0] == d){
            counter++;
        };
    };
    return counter;
};
console.log("ans",birthday([1,2,1,3,2],3,2));
console.log(birthday([1,1,1,1,1,1],3,2));
console.log(birthday([4],4,1));
console.log(birthday([],4,1))
