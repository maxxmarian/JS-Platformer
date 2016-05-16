/**
 * Created by maxxx on 5/13/16.
 */

function level0(){
  player();

  Crafty.e('Floor, 2D, Canvas, Color') //1
    .attr({x: 0, y: 500, w: 2600, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 2
    .attr({x: 0, y: 0, w: 25, h: 3000})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 3
    .attr({x: 200, y: 350, w: 350, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 4
    .attr({x: 700, y: 350, w: 350, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, Wall, 2D, Canvas, Color') // 5
    .attr({x: 2975, y: 0, w: 25, h: 3000})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 6
    .attr({x: 0, y: 3000, w: 3000, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, Wall, 2D, Canvas, Color') // 7
    .attr({x: 2575, y: 500, w: 25, h: 2200})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 8
    .attr({x: 400, y: 2675, w: 2200, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 9
    .attr({x: 25, y: 2830, w: 170, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 10
    .attr({x:25 , y: 2330, w: 2100, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 11
    .attr({x: 2250, y: 2500, w: 190, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 12
    .attr({x: 25, y: 2150, w: 170, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 13
    .attr({x: 260, y: 1980, w: 170, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 14
    .attr({x: 25, y: 1810, w: 170, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 15
    .attr({x: 260, y: 1640, w: 170, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 16
    .attr({x: 25, y: 1470, w: 170, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 17
    .attr({x: 260, y: 1300, w: 170, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 18
    .attr({x: 25, y: 1130, w: 170, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 19
    .attr({x: 260, y: 960, w: 2315, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 20
    .attr({x: 430, y: 985, w: 25, h: 1020})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 21
    .attr({x: 455, y: 1980, w: 2120, h: 25})
    .color(r, g, b);



  Crafty.e('Floor, 2D, Canvas, Color') // dogerBox1
    .attr({x: 2670, y: 650, w: 110, h: 100})
    .color(0, 0, 0);

  Crafty.e('Floor, 2D, Canvas, Color') // dogerBox2
    .attr({x: 2810, y: 920, w: 110, h: 100})
    .color(0, 0, 0);

  Crafty.e('Floor, 2D, Canvas, Color') // dogerBox3
    .attr({x: 2670, y: 1190, w: 110, h: 100})
    .color(0, 0, 0);

  Crafty.e('Floor, 2D, Canvas, Color') // dogerBox4
    .attr({x: 2810, y: 1460, w: 110, h: 100})
    .color(0, 0, 0);

  Crafty.e('Floor, 2D, Canvas, Color') // dogerBox5
    .attr({x: 2670, y: 1730, w: 110, h: 100})
    .color(0, 0, 0);

  Crafty.e('Floor, 2D, Canvas, Color') // dogerBox6
    .attr({x: 2810, y: 2000, w: 110, h: 100})
    .color(0, 0, 0);


  // finishLine = Crafty.e('2D, Canvas, Color, Collision') // finish line
  //   finishLine.attr({x: 2300, y: 525, w: 6, h: 435})
  //   finishLine.color(0, 0, 0, 0.5);

}

// if(2299 < player.x < 2306 && 525 < player.y < 910){
//   alert("shiiiiiiidddddddd");
//   //console.log("kek");
//   // finishLine.destroy();
//   // Crafty.scene('level1',level1);
//   // Crafty.enterScene("level1");
// }
