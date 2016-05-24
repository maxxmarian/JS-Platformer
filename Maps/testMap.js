var superPosition = (Math.round(Math.random() * (3000 - 450 + 1) + 450));
function testMap(){
  timer();
  playerCharacter.vx = 0;
  playerCharacter.x = 50;
  playerCharacter.y = 400;
  Crafty.viewport.follow(playerCharacter, 0, 0);
  Crafty.viewport.bounds = {min: {x: 0, y: 0}, max: {x: 3025, y: 3025}}

  Crafty.e('Floor, 2D, Canvas, Color') // 1
    .attr({x: 0, y: 500, w: 2600, h: 25})
    .color(r, g, b);

    quantumFinish();

}


function quantumFinish(){
  Crafty.e('Floor, 2D, Canvas, Color') // 1
    .attr({x: superPosition - 200, y: superPosition - 900, w: 500, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 1
    .attr({x: superPosition - 200, y: superPosition - 1300, w: 500, h: 25})
    .color(r, g, b);

  Crafty.e('finishLine, 2D, Canvas, Color, Collision') // finish line x
    .attr({x: superPosition - 450, y: superPosition - 925, w: 6, h: 375})
    .color(0, 0, 0, 0.5)
    .checkHits("Player")
    .bind("HitOn", function (hitdata) {
      console.log("collide!");
      confirm("You finished Level x with a time of "+timer.timeDisplay+"!");
      Crafty.enterScene("level1");
    });

}
