

function randomChance(){
var quarters = 100;
var payout = 0;

while (quarters>=0) {
  var chance = Math.floor((Math.random()*100)+1);
    if (chance==1){
  payout = Math.floor((Math.random()*50)+50);
  console.log("You won " + payout + " coins and you have " + (quarters+payout) + " quarters left");
  break;
    }
    if (quarters == 0){
      console.log("0");
    }
    quarters--;
  }
}

randomChance();
