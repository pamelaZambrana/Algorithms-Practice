//https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=false&h_r=next-challenge&h_v=zen
function dayOfProgrammer(year) {
   let januaryToSeptemberDays =243;

   if(year > 1918){
        if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ){
            januaryToSeptemberDays = 244;
        };
   }else if(year === 1918){
        if( year % 4 === 0 ){
            januaryToSeptemberDays = 231;
        }else{
            januaryToSeptemberDays = 230;
        };
   }else{
        if( year % 4 === 0 ){
            januaryToSeptemberDays = 244;
        };
   };
   let day = 256 - januaryToSeptemberDays;
   day = day.toString().length < 2 ? `0${day.toString()}` : day.toString();

   return `${day}.09.${year.toString()}`
};
console.log(dayOfProgrammer(2012));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(1800));
console.log(dayOfProgrammer(1918));