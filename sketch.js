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




playerCharacter = Crafty.e('2D, Canvas, Color, Twoway, Gravity, Collision')
  .attr({x: 90, y: 0, w: 50, h: 50})
  .color('#F00')
  .twoway(600)
  .jumpSpeed(550)
  .gravityConst(1000)
  .gravity('Floor')
    .checkHits('Wall')
    .bind("HitOn", function(hitData){
        playerCharacter.x=hitData[0].obj.x+40;
    });

  // .bind("Moved", function(){
  //   if (this.x >= (cameraWidth / 2)){
  //     Crafty.viewport.x = (this.x - (cameraWidth / 2)) * -1;
  //   }
  //
  //   if (this.y >= (cameraHeight / 2)){
  //     Crafty.viewport.y = (this.y - (cameraHeight / 2)) * -1;
  //   }
  // });

Crafty.e('Floor, 2D, Canvas, Color') //1
  .attr({x: 0, y: 500, w: 2600, h: 25})
  .color(255, 100, 150);

Crafty.e('Floor, Wall, 2D, Canvas, Color') // 2
  .attr({x: 0, y: 0, w: 25, h: 3000})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 3
  .attr({x: 200, y: 350, w: 350, h: 25})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 4
  .attr({x: 700, y: 350, w: 350, h: 25})
  .color(255, 100, 150);


Crafty.e('Floor, Wall, 2D, Canvas, Color') // 5
  .attr({x: 2975, y: 0, w: 25, h: 3000})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 6
  .attr({x: 0, y: 3000, w: 3000, h: 25})
  .color(255, 100, 150);

Crafty.e('Floor, Wall, 2D, Canvas, Color') // 7
  .attr({x: 2575, y: 500, w: 25, h: 2200})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 8
  .attr({x: 400, y: 2675, w: 2200, h: 25})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // x
  .attr({x: 200, y: 200, w: 100, h: 100})
  .color(r, g, b);

Crafty.viewport.follow(playerCharacter,0,0);
//Crafty.viewport.bounds=

function draw(){
 colorTrip();
}



function colorTrip(){
  if(i > 0){
    i = i - 1;
  } else {
    r = random(floor(255));
    g = random(floor(255));
    b = random(floor(255));
    i = 500;
  }
}
