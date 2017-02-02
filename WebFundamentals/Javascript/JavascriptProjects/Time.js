var HOUR = 8;
var MINUTE = 50;
var POSITION = "right now";
var PERIOD = "PM"
var ENDING = "";

if(MINUTE>=50){
  POSITION="almost";
}
if (PERIOD==="AM") {
  ENDING="in the morning";
}
if(PERIOD=="PM"){
  ENDING="in the evening";
}

console.log("It's "+ POSITION+" "+ HOUR+" "+ PERIOD +" " + ENDING);
