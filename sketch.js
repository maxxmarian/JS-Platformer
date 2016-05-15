var i = 500;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var cameraWidth = window.innerWidth;
var cameraHeight = window.innerHeight;
var playerCharacter;
var camera;
var r;
var g;
var b;
//var cyan = 80, 200, 255
//var colorTrip = [cyan];

Crafty.init(windowWidth, windowHeight, document.getElementById('game')); // setup
Crafty.background(170);


  // .bind("Moved", function(){
  //   if (this.x >= (cameraWidth / 2)){
  //     Crafty.viewport.x = (this.x - (cameraWidth / 2)) * -1;
  //   }
  //
  //   if (this.y >= (cameraHeight / 2)){
  //     Crafty.viewport.y = (this.y - (cameraHeight / 2)) * -1;
  //   }
  // });
    Crafty.scene('level0',level0);
Crafty.enterScene("level0");

Crafty.viewport.follow(playerCharacter,0,0);
//Crafty.viewport.bounds=

// function draw(){
//  colorTrip();
// }
//
//
//
// function colorTrip(){
//   if(i > 0){
//     i = i - 1;
//   } else {
//     r = random(floor(255));
//     g = random(floor(255));
//     b = random(floor(255));
//     i = 500;
//   }
// }
