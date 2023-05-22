/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */
/* ------------Intial algorithm----------- */
/* function timeConversion(s) {
    const regex = /AM/;
    let morning = regex.test(s);
    let militaryFormat="";

    for(let i = 0; i < s.length-2 ; i++){
        if(morning){
            if(i==0 && s[i]+s[i+1] == "12"){
                militaryFormat = "00";
                i=2;
            }
        }else{
            let newHour = "";
            if (i == 0){
                newHour = ((s[i] + s[i+1])*1 + 12);
                militaryFormat = newHour;
                i=2;
            }
        };   
        militaryFormat=militaryFormat+s[i];
    };

    return militaryFormat;
}; */

/* -------------Optimized Algorithm------------ */
function timeConversion(s) {
    const AMregex = /AM/;
    let morning = AMregex.test(s);
    const timeLenght = s.length - 2;
    let militaryFormat=[];
    
    if(morning && s[0]+s[1] == "12"){
        militaryFormat = ["00"];
        completeTime(2)
    }else if( morning ){
        completeTime(0)
    }else{
        if(s[0]+s[1] == "12"){
            completeTime(0);
        }else{
            newHour = ((s[0] + s[1])*1 + 12);
            militaryFormat = [newHour];
            completeTime(2);
        }
    };   
    function completeTime(j){
        for(let i = j; i < timeLenght ; i++){
            militaryFormat.push(s[i]);
        };
    }

    return militaryFormat.join("");
};

console.log(timeConversion("02:34:50PM"));
console.log(timeConversion("04:59:59PM"));
console.log(timeConversion("11:59:59PM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:00:00PM"));
console.log(timeConversion("12:45:54PM"));