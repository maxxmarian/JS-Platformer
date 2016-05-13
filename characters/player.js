/**
 * Created by maxx on 5/13/16.
 */
function player() {
    player = Crafty.e('2D, Canvas, Color, Twoway, Gravity, Collision')
        .attr({x: 90, y: 0, w: 50, h: 50})
        .color('#F00')
        .twoway(600)
        .jumpSpeed(550)
        .gravityConst(1000)
        .gravity('Floor')
        .checkHits('Wall')
        .bind("HitOn", function (hitData) {
            if (player.dx <= 0) {
                player.x = hitData[0].obj.x + 40;
            }
            else {
                player.x = hitData[0].obj.x - 70;
            }
        });
}