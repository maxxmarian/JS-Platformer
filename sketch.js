var i = 500;
var camera;
var r;
var g;
var b;
var width;
var height;
var test1;
var test2;
//var cyan = 80, 200, 255
//var colorTrip = [cyan];
function setup(){
  createCanvas(0,0);
  test1=windowWidth;
  test2=windowHeight;
}
function draw(){

}
Crafty.init(test1, test2, document.getElementById('game')); // setup
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
  if(i > 0){
    i = i - 1;
  } else {
    r = random(floor(255));
    g = random(floor(255));
    b = random(floor(255));
    i = 500;
  }
}
