var windowWidth = 3000;
var windowHeight = 3000;
var cameraWidth = window.innerWidth;
var cameraHeight = window.innerHeight;
var playerCharacter;
var camera;

Crafty.init(windowWidth, windowHeight, document.getElementById('game')); // setup
Crafty.background(170);


// camera = Crafty.e('2D, DOM')
//   .attr({x: 250, y: 250, w: 100, h: 100});


playerCharacter = Crafty.e('2D, Canvas, Color, Twoway, Gravity')
  .attr({x: 90, y: 0, w: 50, h: 50})
  .color('#F00')
  .twoway(400)
  .jumpSpeed(550)
  .gravityConst(1000)
  .gravity('Floor')

  //Crafty.viewport.x = this.x;
  //Crafty.viewport.centerOn(playerCharacter);
  //Crafty.viewport.follow(playerCharacter, 0, 0)
  .bind("Moved", function(){
    if (this.x >= (cameraWidth / 2)){
      Crafty.viewport.x = (this.x - (cameraWidth / 2)) * -1;
    }

    if (this.y >= (cameraHeight / 2)){
      Crafty.viewport.y = (this.y - (cameraHeight / 2)) * -1;
    }
  });

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 500, w: 2600, h: 25})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: 0, w: 25, h: 625})
  .color(255, 100, 150);


Crafty.e('Floor, 2D, Canvas, Color') // 2
  .attr({x: 200, y: 350, w: 350, h: 25})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 3
  .attr({x: 700, y: 350, w: 350, h: 25})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 4
  .attr({x: 700, y: 450, w: 350, h: 25})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 5
  .attr({x: 2975, y: 0, w: 25, h: 3000})
  .color(255, 100, 150);
