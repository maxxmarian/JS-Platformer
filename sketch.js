
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var cameraWidth = window.innerWidth;
var cameraHeight = window.innerHeight;
var player;
var camera;
var r;
var g;
var b;


function colorTrip(){
  r = Math.round(Math.random() * (255 - 0 + 1) + 0);
  g = Math.round(Math.random() * (255 - 0 + 1) + 0);
  b = Math.round(Math.random() * (255 - 0 + 1) + 0);
}

colorTrip();


Crafty.init(windowWidth, windowHeight, document.getElementById('game')); // setup
Crafty.background();



    Crafty.scene('level0',level0);
Crafty.enterScene("level0");

Crafty.viewport.follow(player, 0, 0);
//Crafty.viewport.bounds=
