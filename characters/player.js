/**
 * Created by maxxx on 5/13/16.
 */
function playerCharacter() {
    
    playerCharacter = Crafty.e('Player, 2D, Canvas, Color, Twoway, Gravity, Collision, Persist')
        .attr({x: 90, y: 30, w: 50, h: 50})
        .color('#F00')
        .twoway(600)
        .jumpSpeed(650)
        .gravityConst(1100)
        .gravity('Floor')
        .checkHits('Wall')
        .bind("Moved", function(moveData) {
            if(moveData.axis==="y"&&moveData.oldValue<0||moveData.axis==="y"&&moveData.oldValue>=Crafty.viewport.bounds.max.y){
                confirm("You Failed Level "+Crafty._current.slice(5));
                restart();
            }
            if (timer.timerEntity!==undefined){
                timer.timerEntity.destroy()
            }
            timer.timerEntity = Crafty.e("2D, DOM, Text").attr({ x: Math.abs(Crafty.viewport._x)+ 50, y: Math.abs(Crafty.viewport._y) + 50}).text('Elapsed Time:'+ timeDisplayCheck());
        })
        .bind("HitOn", function (hitData) {
            if (playerCharacter.dx <= 0) {
                playerCharacter.x = hitData[0].obj.x + 40;
            }
            else {
                playerCharacter.x = hitData[0].obj.x - 70;
            }
        });
}
