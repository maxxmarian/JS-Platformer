/**
 * Created by maxx on 5/13/16.
 */
function player() {
  player = Crafty.e('2D, Canvas, Color, Twoway, Gravity, Collision')
    .attr({x: 2300, y: 450, w: 50, h: 50})
      .color('#F00')
      .twoway(600)
      .jumpSpeed(750)
      .gravityConst(1500)
      .gravity('Floor')
      .checkHits('Wall')
      .checkHits('finishLine')
      .bind("HitOn", function (hitData) {
        if (player.dx <= 0) { // are you sure .dx is a thing?
          player.x = hitData[0].obj.x + 40;
        } else {
          player.x = hitData[0].obj.x - 70;
        }
  });
  Crafty.viewport.follow(player, 0, 0);
}
