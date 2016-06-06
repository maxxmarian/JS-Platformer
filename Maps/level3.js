var elevator1;
var movedUp = false;
var elevator;
var elevatorMove;
function level3(){
  playerCharacter.destroy();
  player();
  playerCharacter.x = 100;
  playerCharacter.y = 35;
  playerCharacter.addComponent("GroundAttacher");
  Crafty.viewport.follow(playerCharacter, 0, 0);
  Crafty.viewport.bounds = {min: {x: 0, y: 0}, max: {x: 3025, y: 3025}}


  Crafty.e('Floor, 2D, Canvas, Color') // 1
    .attr({x: 0, y: 400, w: 450, h: 25})
    .color(r, g, b);

  Crafty.e('Ceiling, 2D, Canvas, Color') // 2
    .attr({x: 0, y: 0, w: 3000, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 3
    .attr({x: 0, y: 0, w: 25, h: 3000})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 4
    .attr({x: 800, y: 0, w: 25, h: 2100})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 5
    .attr({x: 600, y: 600, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 6
    .attr({x: 450, y: 700, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 7
    .attr({x: 300, y: 800, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 8
    .attr({x: 150, y: 900, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 9
    .attr({x: 0, y: 1000, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 10
    .attr({x: 150, y: 1150, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 11
    .attr({x: 300, y: 1300, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 12
    .attr({x: 450, y: 1450, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 13
    .attr({x: 600, y: 1600, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 14
    .attr({x: 450, y: 1700, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 15
    .attr({x: 300, y: 1800, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 16
    .attr({x: 150, y: 1900, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 17
    .attr({x: 0, y: 2000, w: 300, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 18
    .attr({x: 500, y: 2000, w: 325, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 19
    .attr({x: 275, y: 2000, w: 25, h: 100})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 20
    .attr({x: 500, y: 2000, w: 25, h: 100})
    .color(r, g, b);

  Crafty.e('Ceiling, 2D, Canvas, Color') // 21
    .attr({x: 0, y: 2100, w: 300, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 22
    .attr({x: 500, y: 2100, w: 1600, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 23
    .attr({x: 0, y: 2400, w: 300, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 24
    .attr({x: 500, y: 2400, w: 525, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 25
    .attr({x: 275, y: 2400, w: 25, h: 125})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 26
    .attr({x: 275, y: 2500, w: 225, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 27
    .attr({x: 500, y: 2400, w: 25, h: 125})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 28
    .attr({x: 1225, y: 2400, w: 575, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 29
    .attr({x: 1000, y: 2400, w: 25, h: 125})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 30
    .attr({x: 1000, y: 2500, w: 225, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 31
    .attr({x: 1225, y: 2400, w: 25, h: 125})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 32
    .attr({x: 1775, y: 2400, w: 25, h: 125})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 33
    .attr({x: 1775, y: 2500, w: 225, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 34
    .attr({x: 2000, y: 2400, w: 25, h: 125})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 35
    .attr({x: 2000, y: 2400, w: 525, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 36
    .attr({x: 2500, y: 1500, w: 25, h: 900})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 37
    .attr({x: 2220, y: 2250, w: 150, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 38
    .attr({x: 1300, y: 250, w: 1700, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 39
    .attr({x: 2975, y: 0, w: 25, h: 275})
    .color(r, g, b);

  Crafty.e('Tower')
    .place(395, 2370)
    .proximityFire(400, 50, 395, 2370);

  Crafty.e('Tower')
    .place(1120, 2370)
    .proximityFire(200, 50, 1120, 2370);

  Crafty.e('Tower')
    .place(1895, 2370)
    .proximityFire(200, 50, 1895, 2370);
	
Crafty.e('Tower')
	.place(1025,1980)
	.proximityFire(600,50,1025,1990);

  elevator1 = Crafty.e('Floor, 2D, Canvas, Color, Elevator1, Collision') // elevator
    .attr({x: 980, y: 2075, w: 200, h: 25})
    .color(r, g, b);


  Crafty.e('finishLine, 2D, Canvas, Color, Collision') // finish line 4
    .attr({x: 2830, y: 25, w: 6, h: 225})
    .color(0, 0, 0, 0.5)
    .checkHits("Player")
    .bind("HitOn", function (hitdata) {
      confirm("You finished Level 4 with a time of "+timer.timeDisplay+"!");
      Crafty.enterScene("level4");
    });

  setInterval(function () {
    if(movedUp === false){
      if(elevator1.y > 300){
        elevator1.y = elevator1.y - 1;
        if(elevator1.y <= 300){
          movedUp = true;
        }
      }
    } else {
      if(elevator1.y > 299){
        elevator1.y = elevator1.y + 1;
        if(elevator1.y > 2075){
          movedUp = false;
        }
      }
    }
  }, 8);
}
