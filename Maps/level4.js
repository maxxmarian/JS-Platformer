var elevator2;
function level4(){
  var moveBlock1;
  var moveBlock2;
  var moveBlock3;
  var moveBlock4;
  var moveBlock5;
  var moveBlock6;
  var moveBlock7;
  var moveBlock8;
  var moveBlock9;
  var moveBlock10;
  var moveBlock11;
  var moveBlock12;
  var movedUp1 = false;
  var movedUp2 = false;
  var movedUp3 = false;
  var movedUp4 = false;
  var movedUp5 = false;
  var movedUp6 = false;
  var movedUp7 = false;
  var movedUp8 = false;
  var movedUp9 = false;
  var movedUp10 = false;
  var movedUp11 = false;
  var movedUp12 = false;

  var movedLeft1 = false;
  var movedLeft2 = false;
  var movedLeft3 = false;
  var movedLeft4 = false;
  var movedLeft5 = false;

  playerCharacter.x = 100;
  playerCharacter.y = 35;
  playerCharacter.reInit();
  Crafty.viewport.follow(playerCharacter, 0, 0);
  Crafty.viewport.bounds = {min: {x: 0, y: 0}, max: {x: 3025, y: 3025}}

  Crafty.e('Floor, 2D, Canvas, Color') // 1
    .attr({x: 0, y: 400, w: 2400, h: 25})
    .color(r, g, b);

  Crafty.e('Ceiling, 2D, Canvas, Color') // 2
    .attr({x: 0, y: 0, w: 3000, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 3
    .attr({x: 0, y: 0, w: 25, h: 400})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 4
    .attr({x: 0, y: 0, w: 25, h: 400})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 5
    .attr({x: 2975, y: 0, w: 25, h: 3000})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 6
    .attr({x: 2375, y:400, w: 25, h: 2200})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 7
    .attr({x: 0, y: 3000, w: 2400, h: 25})
    .color(r, g, b);

  Crafty.e('Wall, 2D, Canvas, Color') // 8
    .attr({x: 1900, y: 2000, w: 25, h: 1000})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 9
    .attr({x: 1900, y: 2830, w: 200, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 10
    .attr({x: 1900, y: 2650, w: 200, h: 25})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 11
    .attr({x: 2250, y: 2470, w: 35, h: 35})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 12
    .attr({x: 2310, y: 2270, w: 65, h: 35})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 13
    .attr({x: 2110, y: 2100, w: 35, h: 35})
    .color(r, g, b);

  Crafty.e('Floor, 2D, Canvas, Color') // 14
    .attr({x: 1900, y: 2650, w: 200, h: 25})
    .color(r, g, b);





  moveBlock1 = Crafty.e('Wall, Floor, 2D, Canvas, Color') // moveBlock1
    .attr({x: 400, y: 300, w: 100, h: 100})
    .color(0, 0, 0);

  moveBlock2 = Crafty.e('Wall, Floor, 2D, Canvas, Color') // moveBlock2
    .attr({x: 700, y: 300, w: 100, h: 100})
    .color(0, 0, 0);

  moveBlock3 = Crafty.e('Wall, Floor, 2D, Canvas, Color') // moveBlock3
    .attr({x: 1000, y: 300, w: 100, h: 100})
    .color(0, 0, 0);

  moveBlock4 = Crafty.e('Wall, Floor, 2D, Canvas, Color') // moveBlock4
    .attr({x: 1300, y: 300, w: 100, h: 100})
    .color(0, 0, 0);

  moveBlock5 = Crafty.e('Wall, Floor, 2D, Canvas, Color') // moveBlock5
    .attr({x: 1600, y: 300, w: 100, h: 100})
    .color(0, 0, 0);


  moveBlock6 = Crafty.e('Wall, Floor, 2D, Canvas, Color') // moveBlock6
    .attr({x: 2875, y: 600, w: 100, h: 100})
    .color(0, 0, 0);

  moveBlock7 = Crafty.e('Wall, Floor, 2D, Canvas, Color') // moveBlock7
    .attr({x: 2875, y: 1000, w: 100, h: 100})
    .color(0, 0, 0);

  moveBlock8 = Crafty.e('Wall, Floor, 2D, Canvas, Color') // moveBlock8
    .attr({x: 2875, y: 1400, w: 100, h: 100})
    .color(0, 0, 0);

  moveBlock9 = Crafty.e('Wall, Floor, 2D, Canvas, Color') // moveBlock9
    .attr({x: 2875, y: 1800, w: 100, h: 100})
    .color(0, 0, 0);

  moveBlock10 = Crafty.e('Wall, Floor, 2D, Canvas, Color') // moveBlock10
    .attr({x: 2875, y: 2200, w: 100, h: 100})
    .color(0, 0, 0);

  elevator2 = Crafty.e('Floor, 2D, Canvas, Color, Elevator2, Collision') // elevator2
      .attr({x: 2000, y: 2000, w: 200, h: 25})
      .color(r, g, b);


// set 1, y

    setInterval(function () {
      if(movedUp1 === false){
        if(moveBlock1.y > 25){
          moveBlock1.y = moveBlock1.y - 5;
          if(moveBlock1.y <= 25){
            movedUp1 = true;
          }
        }
      } else {
        if(moveBlock1.y > 24){
          moveBlock1.y = moveBlock1.y + 5;
          if(moveBlock1.y > 300){
            movedUp1 = false;
          }
        }
      }
    }, 9);

    setInterval(function () {
      if(movedUp2 === false){
        if(moveBlock2.y > 25){
          moveBlock2.y = moveBlock2.y - 5;
          if(moveBlock2.y <= 25){
            movedUp2 = true;
          }
        }
      } else {
        if(moveBlock2.y > 24){
          moveBlock2.y = moveBlock2.y + 5;
          if(moveBlock2.y > 300){
            movedUp2 = false;
          }
        }
      }
    }, 8);

    setInterval(function () {
      if(movedUp3 === false){
        if(moveBlock3.y > 25){
          moveBlock3.y = moveBlock3.y - 5;
          if(moveBlock3.y <= 25){
            movedUp3 = true;
          }
        }
      } else {
        if(moveBlock3.y > 24){
          moveBlock3.y = moveBlock3.y + 5;
          if(moveBlock3.y > 300){
            movedUp3 = false;
          }
        }
      }
    }, 7);

    setInterval(function () {
      if(movedUp4 === false){
        if(moveBlock4.y > 25){
          moveBlock4.y = moveBlock4.y - 5;
          if(moveBlock4.y <= 25){
            movedUp4 = true;
          }
        }
      } else {
        if(moveBlock4.y > 24){
          moveBlock4.y = moveBlock4.y + 5;
          if(moveBlock4.y > 300){
            movedUp4 = false;
          }
        }
      }
    }, 6);

    setInterval(function () {
      if(movedUp5 === false){
        if(moveBlock5.y > 25){
          moveBlock5.y = moveBlock5.y - 5;
          if(moveBlock5.y <= 25){
            movedUp5 = true;
          }
        }
      } else {
        if(moveBlock5.y > 24){
          moveBlock5.y = moveBlock5.y + 5;
          if(moveBlock5.y > 300){
            movedUp5 = false;
          }
        }
      }
    }, 5);

// set 2, x

    setInterval(function () {
      if(movedLeft1 === false){
        if(moveBlock6.x > 2400){
          moveBlock6.x = moveBlock6.x - 5;
          if(moveBlock6.x <= 2400){
            movedLeft1 = true;
          }
        }
      } else {
        if(moveBlock6.x > 2399){
          moveBlock6.x = moveBlock6.x + 5;
          if(moveBlock6.x > 2875){
            movedLeft1 = false;
          }
        }
      }
    }, 9);

    setInterval(function () {
      if(movedLeft2 === false){
        if(moveBlock7.x > 2400){
          moveBlock7.x = moveBlock7.x - 5;
          if(moveBlock7.x <= 2400){
            movedLeft2 = true;
          }
        }
      } else {
        if(moveBlock7.x > 2399){
          moveBlock7.x = moveBlock7.x + 5;
          if(moveBlock7.x > 2875){
            movedLeft2 = false;
          }
        }
      }
    }, 8);

    setInterval(function () {
      if(movedLeft3 === false){
        if(moveBlock8.x > 2400){
          moveBlock8.x = moveBlock8.x - 5;
          if(moveBlock8.x <= 2400){
            movedLeft3 = true;
          }
        }
      } else {
        if(moveBlock8.x > 2399){
          moveBlock8.x = moveBlock8.x + 5;
          if(moveBlock8.x > 2875){
            movedLeft3 = false;
          }
        }
      }
    }, 7);

    setInterval(function () {
      if(movedLeft4 === false){
        if(moveBlock9.x > 2400){
          moveBlock9.x = moveBlock9.x - 5;
          if(moveBlock9.x <= 2400){
            movedLeft4 = true;
          }
        }
      } else {
        if(moveBlock9.x > 2399){
          moveBlock9.x = moveBlock9.x + 5;
          if(moveBlock9.x > 2875){
            movedLeft4 = false;
          }
        }
      }
    }, 6);

    setInterval(function () {
      if(movedLeft5 === false){
        if(moveBlock10.x > 2400){
          moveBlock10.x = moveBlock10.x - 5;
          if(moveBlock10.x <= 2400){
            movedLeft5 = true;
          }
        }
      } else {
        if(moveBlock10.x > 2399){
          moveBlock10.x = moveBlock10.x + 5;
          if(moveBlock10.x > 2875){
            movedLeft5 = false;
          }
        }
      }
    }, 5);

// set 3, y

setInterval(function () {
  if(movedUp6 === false){
    if(elevator2.y > 800){
      elevator2.y = elevator2.y - 5;
      if(elevator2.y <= 800){
        movedUp6 = true;
      }
    }
  } else {
    if(elevator2.y > 1999){
      elevator2.y = elevator2.y + 5;
      if(elevator2.y > 2000){
        movedUp6 = false;
      }
    }
  }
}, 6);
}
