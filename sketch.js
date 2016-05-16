var windowWidth = window.innerWidth -16;
var windowHeight = window.innerHeight -16;
var player;
var camera;
var r;
var g;
var b;
var finishLine;

function colorTrip(){
  r = Math.round(Math.random() * (255 - 0 + 1) + 0);
  g = Math.round(Math.random() * (255 - 0 + 1) + 0);
  b = Math.round(Math.random() * (255 - 0 + 1) + 0);
}

colorTrip();

Crafty.init(windowWidth, windowHeight, document.getElementById('game')); // setup
Crafty.background();

Crafty.scene('level0',level0);
Crafty.enterScene("level0");

// if(2299 < player.x < 2306 && 525 < player.y < 910){
//   //alert("shiiiiiiidddddddd");
//   //console.log("kek");
//   // finishLine.destroy();
//   // Crafty.scene('level1',level1);
//   // Crafty.enterScene("level1");
// }

// function keyPressed(){
//   if(key === 'R'){
//     restart();
//   }
// }
//
// function restart(){
//   player.x = 2300;
//   player.y = 450;
// }
