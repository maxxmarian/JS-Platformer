function level1() {
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
        .attr({x: 500, y: 300, w: 25, h: 215})
        .color(r, g, b);

    Crafty.e('Wall, 2D, Canvas, Color') // 3
        .attr({x: 1320, y: 300, w: 25, h: 215})
        .color(r, g, b);

    Crafty.e('Wall, 2D, Canvas, Color') // 4
        .attr({x: 910, y: 0, w: 25, h: 400})
        .color(r, g, b);

<<<<<<< 0f5ca48471a8d232d4d8018b1f0414698d46966c
    Crafty.e('Wall, 2D, Canvas, Color') // 5
        .attr({x: 2580, y: 500, w: 25, h: 400})
        .color(r, g, b);

    Crafty.e('Floor, 2D, Canvas, Color') // 6
        .attr({x: 1000, y: 900, w: 1580, h: 25})
        .color(r, g, b);
=======
  Crafty.e('Wall, 2D, Canvas, Color') // 5
    .attr({x: 2580, y: 500, w: 25, h: 425})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 6
    .attr({x: 1000, y: 900, w: 1580, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 7
    .attr({x: 1000, y: 1100, w: 1605, h: 25})
    .color(r, g, b);
>>>>>>> new platforms on level1, added testMap for testing
}
