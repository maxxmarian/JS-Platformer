
function testMap(){
  var moveBlock1;
  var moveBlock2;
  var movedUp = false;
  playerCharacter.x = 50;
  playerCharacter.y = 400;
  playerCharacter.reInit();
  Crafty.viewport.follow(playerCharacter, 0, 0);
  Crafty.viewport.bounds = {min: {x: 0, y: 0}, max: {x: 3025, y: 3025}}

  Crafty.e('Floor, 2D, Canvas, Color') // 1
    .attr({x: 0, y: 500, w: 2600, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 2
    .attr({x: 0, y: 0, w: 25, h: 500})
    .color(r, g, b);

  moveBlock1 = Crafty.e('Floor, 2D, Canvas, Color, Motion, Collision') // x
      .attr({x: 300, y: 400, w: 200, h: 25})
      .color(r, g, b);

  moveBlock2 = Crafty.e('Floor, 2D, Canvas, Color, Motion, Collision') // x
      .attr({x:600, y: 400, w: 200, h: 25})
      .color(r, g, b);

      setInterval(function () {
        if(movedUp === false){
          if(moveBlock1.y > 100){
            moveBlock1.y = moveBlock1.y - 1;
            if(moveBlock1.y <= 100){
              movedUp = true;
            }
          }
        } else {
          if(moveBlock1.y > 99){
          moveBlock1.y = moveBlock1.y + 1;
            if(moveBlock1.y > 399){
              movedUp = false;
            }
          }
        }
      }, 5);

      setInterval(function () {
        if(movedUp === false){
          if(moveBlock2.y > 100){
            moveBlock2.y = moveBlock2.y - 1;
            if(moveBlock2.y <= 100){
              movedUp = true;
            }
          }
        } else {
          if(moveBlock2.y > 99){
          moveBlock2.y = moveBlock2.y + 1;
            if(moveBlock2.y > 399){
              movedUp = false;
            }
          }
        }
      }, 5);
}
