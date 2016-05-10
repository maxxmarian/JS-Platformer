var windowWidth = 1335;
var windowHeight = 625;
var playerCharacter;


Crafty.init(windowWidth, windowHeight, document.getElementById('game')); // setup

Crafty.background(170);

playerCharacter = Crafty.e('2D, Canvas, Color, Twoway, Gravity')
  .attr({x: 0, y: 0, w: 50, h: 50})
  .color('#F00')
  .twoway(400)
  .jumpSpeed(550)
  .gravityConst(1000)
  .gravity('Floor');

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 0, y: windowHeight - 25, w: windowWidth, h: 25})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 200, y: 450, w: 350, h: 25})
  .color(255, 100, 150);

Crafty.e('Floor, 2D, Canvas, Color')
  .attr({x: 700, y: 450, w: 350, h: 25})
  .color(255, 100, 150);
