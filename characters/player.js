/**
 * Created by maxxx on 5/13/16.
 */
var rePositionRate;
function player() {
    playerCharacter = Crafty.e('Player, 2D, Canvas, Color, Twoway, Gravity, Collision, Persist')
        .attr({x: 90, y: 30, w: 50, h: 50})
        .color('#F00')
        .twoway(600)
        .jumper(650, ['UP_ARROW', 'W'])
        .gravityConst(1100)
        .gravity('Floor')
        .checkHits('Wall')
        // .onHit('Elevator1', rePosition1)
        // .onHit('Elevator2', rePosition2)
        // .onHit('MoveBlock', rePosition3)

        .onHit('Ceiling', ceilingStop)
        .bind("Moved", function (moveData) { // level failed message
            if (moveData.axis === "y" && moveData.oldValue < 0 || moveData.axis === "y" && moveData.oldValue >= Crafty.viewport.bounds.max.y) {
                confirm("You Failed Level " + Crafty._current.slice(5));
                restart();
            }
            if (moveData.axis === "x" && moveData.oldValue < 0 || moveData.axis === "x" && moveData.oldValue >= Crafty.viewport.bounds.max.x) {
                confirm("You Failed Level " + Crafty._current.slice(5));
                restart();
            }
            if (timer.timerEntity !== undefined) {
                timer.timerEntity.destroy()
            }
            timer.timerEntity = Crafty.e("2D, DOM, Text").attr({
                x: Math.abs(Crafty.viewport._x) + 50,
                y: Math.abs(Crafty.viewport._y) + 50
            }).text('Elapsed Time:' + timeDisplayCheck());
        })
        .onHit('Wall',function wallHit(hitObjectArray){
			if (playerCharacter.dx < 0) {
				playerCharacter.x=hitObjectArray[0].obj._x+hitObjectArray[0].obj._w;
			}
			if(playerCharacter.dx>0) {
				playerCharacter.x=hitObjectArray[0].obj._x-playerCharacter._w;
			}
			if(playerCharacter.dx === 0){
				playerCharacter.x=playerCharacter._x;
			}
		})
    playerCharacter.reInit = function () {
        playerCharacter.removeComponent("Twoway");
		playerCharacter.resetMotion();
        playerCharacter.addComponent("Twoway");
        playerCharacter.twoway(600);
        playerCharacter.jumper(650, ['UP_ARROW', 'W']);
        playerCharacter.gravityConst(1100);
        playerCharacter.gravity('Floor');

    }
}
function ceilingStop(){

  if (playerCharacter.dy <= 0) {
    playerCharacter.y = playerCharacter.y + 9;
  } else {
    playerCharacter.y = playerCharacter.y - 30;
  }
}

// function rePosition1(){
//   rePositionRate = setInterval(function () {
//     playerCharacter.y = elevator1.y - 51;
//     clearInterval(rePositionRate);
//   }, 1);
// }
//
// function rePosition2(){
//
//   rePositionRate = setInterval(function () {
//     playerCharacter.y = elevator2.y - 51;
//     clearInterval(rePositionRate);
//   }, 1);
// }
//
// function rePosition3(){
//
//   if (playerCharacter.dy <= 0) {
//     playerCharacter.y = playerCharacter.y + 9;
//   } else {
//     playerCharacter.y = playerCharacter.y - 30;
//   }
  // playerCharacter.vx = moveBlock1.vx;
  //playerCharacter.y = elevator.y - 50;
//}
