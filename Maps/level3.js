function level3(){
  playerCharacter.vx = 0;
  playerCharacter.x = 90;
  playerCharacter.y = 30;
  Crafty.viewport.follow(playerCharacter, 0, 0);
  Crafty.viewport.bounds = {min: {x: 0, y: 0}, max: {x: 3025, y: 3025}}

  Crafty.e('Floor, 2D, Canvas, Color') // 1
    .attr({x: 0, y: 500, w: 2600, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 2
    .attr({x: 0, y: 500, w: 2600, h: 25})
    .color(r, g, b);
}
