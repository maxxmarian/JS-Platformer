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
var elapsedSeconds=0;
var secondsDisplay=0;
var elapsedMinutes=0;
var timerEntity;
setInterval(function(){timer()},1000);
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
Crafty.scene('level0',level0);
Crafty.scene('level1', level1);
Crafty.enterScene("level0");




function restart(){
    Crafty.enterScene(Crafty._current);
    if (Crafty._current==='level0'){
      timer.elapsedSeconds=0;
      timer.elapsedSeconds=0;
      if (timerEntity!==undefined){
        timerEntity.destroy()
      }
      timerEntity = Crafty.e("2D, DOM, Text").attr({ x: abs(Crafty.viewport._x)+ 50, y: abs(Crafty.viewport._y) + 50}).text('Elapsed Time:'+ timeDisplayCheck());
    }
}


function timer() {
  elapsedSeconds = elapsedSeconds + 1;
  if (elapsedSeconds >= 60) {
    elapsedMinutes = elapsedSeconds / 60;
    elapsedSeconds = 0;
  }
    if (elapsedSeconds === 0) {
    secondsDisplay = elapsedSeconds.toString() + "0"
    }
    else {
    secondsDisplay = elapsedSeconds.toString();
    }
    if (elapsedSeconds>0&&elapsedSeconds<10){
      secondsDisplay = "0" + elapsedSeconds.toString();
    }
  timer.timeDisplay = elapsedMinutes.toString() + ":" + secondsDisplay;
  if (timerEntity!==undefined){
    timerEntity.destroy()
  }
  timerEntity = Crafty.e("2D, DOM, Text").attr({ x: abs(Crafty.viewport._x)+ 50, y: abs(Crafty.viewport._y) + 50}).text('Elapsed Time:'+ timeDisplayCheck());
}
function timeDisplayCheck(){
  if (timer.timeDisplay===undefined){
    return "0:00"
  }
  else {
    return timer.timeDisplay;
  }
}