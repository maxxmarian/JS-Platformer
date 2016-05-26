var moveBlocks = [moveBlock1];
var moveBlock;

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

  moveBlock1 = Crafty.e('Floor, 2D, Canvas, Color, Motion') // x
      .attr({x: 301, y: 400, w: 50, h: 50})
      .color(r, g, b);
  moveRight();
}

function moveRight(){
  moveBlock[i].vx = 400;
}

function moveLeft(){
  moveBlock[i].vx = -400;
}
