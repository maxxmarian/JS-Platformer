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

function setup(){
  createCanvas(0,0);
  winWidth=windowWidth;
  winHeight=windowHeight;
  colorTrip();
}
function draw(){

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
Crafty.enterScene("level0");


//Crafty.viewport.bounds=

function restart(){
    Crafty.enterScene(Crafty._current);
}

function colorTrip(){
  r = Math.round(Math.random() * (255 - 0 + 1) + 0);
  g = Math.round(Math.random() * (255 - 0 + 1) + 0);
  b = Math.round(Math.random() * (255 - 0 + 1) + 0);
}
