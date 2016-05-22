var i = 500;
var camera;
var r;
var g;
var b;
var width;
var height;
var winWidth;
var winHeight;
var finishLine;
//var timer.timerEntity;

function setup(){
  createCanvas(200,200);
  winWidth=windowWidth;
  winHeight=windowHeight;
  colorTrip();

}
function draw(){
  //text('Elapsed Time:'+ timeDisplay,100,100);
}

function colorTrip(){
  r = Math.round(Math.random() * (255 - 0 + 1) + 0);
  g = Math.round(Math.random() * (255 - 0 + 1) + 0);
  b = Math.round(Math.random() * (255 - 0 + 1) + 0);
}

colorTrip();


Crafty.init(winWidth, winHeight, document.getElementById('game')); // setup
//Crafty.viewport.init(window.innerWidth-17,  window.innerHeight-17, document.getElementById('game'))
Crafty.background(170);


playerCharacter();
Crafty.scene('testMap', testMap);
Crafty.scene('level0', level0);
Crafty.scene('level1', level1);
Crafty.enterScene("level0");




function restart(){
    Crafty.enterScene(Crafty._current);
    if (Crafty._current==='level0'){
      timer.elapsedSeconds=0;
      timer.elapsedMinutes=0;
      if (timer.timerEntity!==undefined){
        timer.timerEntity.destroy()
      }
      timer.timerEntity = Crafty.e("2D, DOM, Text").attr({ x: Math.abs(Crafty.viewport._x)+ 50, y: Math.abs(Crafty.viewport._y) + 50}).text('Elapsed Time:'+ timeDisplayCheck());
    }
}


