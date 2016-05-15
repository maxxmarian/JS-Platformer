/**
 * Created by maxxx on 5/13/16.
 */
function level0(){
    player();
    Crafty.e('Floor, 2D, Canvas, Color') //1
    .attr({x: 0, y: 500, w: 2600, h: 25})
    .color(255, 100, 150);

Crafty.e('Wall, 2D, Canvas, Color') // 2
    .attr({x: 0, y: 0, w: 25, h: 3000})
    .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 3
    .attr({x: 200, y: 350, w: 350, h: 25})
    .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 4
    .attr({x: 700, y: 350, w: 350, h: 25})
    .color(255, 100, 150);


Crafty.e('Floor, Wall, 2D, Canvas, Color') // 5
    .attr({x: 2975, y: 0, w: 25, h: 3000})
    .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 6
    .attr({x: 0, y: 3000, w: 3000, h: 25})
    .color(255, 100, 150);

Crafty.e('Floor, Wall, 2D, Canvas, Color') // 7
    .attr({x: 2575, y: 500, w: 25, h: 2200})
    .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // 8
    .attr({x: 400, y: 2675, w: 2200, h: 25})
    .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color') // x
    .attr({x: 200, y: 200, w: 100, h: 100})
    .color(r, g, b);
}
