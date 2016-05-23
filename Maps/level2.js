function level2(){
  timer();
  playerCharacter.vx = 0;
  playerCharacter.x = 90;
  playerCharacter.y = 20;
  Crafty.viewport.follow(playerCharacter, 0, 0);
  Crafty.viewport.bounds = {min: {x: 0, y: 0}, max: {x: 3025, y: 3025}}

  Crafty.e('Floor, 2D, Canvas, Color') // 1
    .attr({x: 0, y: 300, w: 300, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 2
    .attr({x: 0, y: 300, w: 300, h: 25})
    .color(r, g, b);

  for(i = 0; i < 60; i++){
    randomPlatform();
  }
}


function randomPlatform(){
  Crafty.e('Floor, 2D, Canvas, Color') // x
    .attr({x: (Math.round(Math.random() * (3000 - 0 + 1) + 0)), y: (Math.round(Math.random() * (3000 - 0 + 1) + 0)), w: 50, h: 50})
    .color(r, g, b);
}
