
var sum = 0.01;

for (var counter = 1; counter <= 30; counter++) {
if(counter==1){
  continue;
}
sum=sum+(sum*2);
}

console.log(sum);
