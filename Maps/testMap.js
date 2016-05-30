var moveBlock1;
var movedRight = false;
function testMap(){
  playerCharacter.x = 50;
  playerCharacter.y = 400;
  playerCharacter.vx = 0;
  playerCharacter.vy = 0;
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
      //.onHit('playerCharacter', rePosition);

      // .bind("HitOn", function (hitData) {
      //   playerCharacter.x = moveBlock1.x;
      //   // if(playerCharacter.dy >= 0){
      //   //   console.log("kek");
      //   // }
      // });

}


// setInterval(function () {
//   // moveBlock1.x = moveBlock1.x + 1;
//   if(movedRight === false){
//     if(moveBlock1.x < 700){
//       moveBlock1.x = moveBlock1.x + 1;
//       if(moveBlock1.x >= 700){
//         movedRight = true;
//       }
//     }
//   } else {
//     if(moveBlock1.x > 299){
//       moveBlock1.x = moveBlock1.x - 1;
//       if(moveBlock1.x <= 299){
//         movedRight = false;
//       }
//     }
//   }
// }, 1);
