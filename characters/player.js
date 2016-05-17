/**
 * Created by maxx on 5/13/16.
 */
function playerCharacter() {
    playerCharacter = Crafty.e('Player, 2D, Canvas, Color, Twoway, Gravity, Collision, Persist')
        .attr({x: 90, y: 20, w: 50, h: 50})
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
