function level1(){
  playerCharacter.x = 100;
  playerCharacter.y = 20;
  playerCharacter.reInit();
  Crafty.viewport.follow(playerCharacter, 0, 0);
  Crafty.viewport.bounds = {min: {x: 0, y: 0}, max: {x: 3025, y: 3025}}

  Crafty.e('Tower')
      .place(300,300)
      .proximityFire(100,50,300,300);

  Crafty.e('Floor, 2D, Canvas, Color') // 1
    .attr({x: 0, y: 500, w: 2600, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 2
    .attr({x: 500, y: 300, w: 25, h: 215})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 3
    .attr({x: 1320, y: 300, w: 25, h: 215})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 4
    .attr({x: 910, y: 0, w: 25, h: 400})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 5
    .attr({x: 2580, y: 500, w: 25, h: 425})
    .color(r, g, b);

  Crafty.e('Ceiling, 2D, Canvas, Color, Collision') // 6
    .attr({x: 1000, y: 900, w: 1580, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 7
    .attr({x: 1000, y: 1100, w: 1605, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 8
    .attr({x: 350, y: 930, w: 300, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 9
    .attr({x: 1000, y: 525, w: 25, h: 400})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 10
    .attr({x: 1000, y: 1125, w: 25, h: 180})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 11
    .attr({x: 350, y: 1280, w: 650, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 12
    .attr({x: 650, y: 900, w: 25, h: 55})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 13
    .attr({x: 325, y: 735, w: 25, h: 2100})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 14
    .attr({x: 0, y: 0, w: 25, h: 3000})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 15
    .attr({x: 350, y: 2975, w: 1800, h: 25})
    .color(r, g, b);

  Crafty.e('Ceiling, 2D, Canvas, Color') // 16
    .attr({x: 350, y: 2810, w: 1800, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 17
    .attr({x: 2650, y: 2800, w: 350, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 18
    .attr({x: 2650, y: 2250, w: 25, h: 495})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 19
    .attr({x: 2125, y: 2250, w: 25, h: 585})
    .color(r, g, b);

  Crafty.e('Ceiling, 2D, Canvas, Color') // 20
    .attr({x: 2125, y: 2250, w: 875, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 21
    .attr({x: 2975, y: 2250, w: 25, h: 575})
    .color(r, g, b);

  Crafty.e('finishLine, 2D, Canvas, Color, Collision') // finish line
    .attr({x: 2850, y: 2275, w: 6, h: 525})
    .color(0, 0, 0, 0.5)
    .checkHits("Player")
    .bind("HitOn", function (hitdata) {
      Crafty.trigger("levelChange");
      confirm("You finished Level 2 with a time of "+timer.timeDisplay+"!");
      Crafty.enterScene("level2");
    });
}
