var i = 0;
var camera;
var r;
var g;
var b;
var width;
var height;
var winWidth;
var winHeight;
var finishLine;
var levelChanging=false;
var playerCharacter;
var fireInt;
//var playerCharacter;


//var timer.timerEntity;


var elapsedSeconds=0;
var secondsDisplay=0;
var elapsedMinutes=0;
var timerEntity;


function setup(){
  createCanvas(200,200);
  winWidth=windowWidth;
  winHeight=windowHeight;
  colorTrip();

}
// function draw(){
//   if(moveBlocks[i].x > 700){
//     moveLeft();
//   }
//
//   if(moveBlocks[i].x < 300){
//     moveRight();
//   }
// }

function colorTrip(){
  r = Math.round(Math.random() * (255 - 0 + 1) + 0);
  g = Math.round(Math.random() * (255 - 0 + 1) + 0);
  b = Math.round(Math.random() * (255 - 0 + 1) + 0);
}

colorTrip();


Crafty.init(winWidth, winHeight, document.getElementById('game')); // setup
//Crafty.viewport.init(window.innerWidth-17,  window.innerHeight-17, document.getElementById('game'))
Crafty.background(170);


player();
Crafty.scene('testMap', testMap);
Crafty.scene('level0', level0);
Crafty.scene('level1', level1);
Crafty.scene('level2', level2);
Crafty.scene('level3', level3);
Crafty.scene('level4', level3);
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
function createTowers(){
Crafty.c("Tower", {

    init: function () {
        Crafty.sprite("assets/watchtower.png", {towersprite:[0,0,50,120]});
        this.addComponent('2D, Color, Canvas, towersprite');
        this.color(255,255,255);
        //Crafty.circle(this.x,this.y,15);
        // this.w = 30;
        // this.h = 30;

    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        return this;
    },
    fire: function(updateInterval) {
        outsideFire(updateInterval,this.x,this.y);
        return this;
    },
    delayedFire: function(delay,updateInterval){
        setTimeout(function(){outsideFire(updateInterval,this.x,this.y)},delay);
    },
    proximityFire: function(proximity, updateInterval, towerX, towerY){
        var firedUpon=true;
        playerCharacter.bind("Moved",function towerFire (moveData) {
            if (firedUpon) {
                if (playerCharacter._x <= towerX - proximity || playerCharacter._x >= towerX + proximity || playerCharacter._y <= towerY - proximity || playerCharacter._y >= towerY + proximity) {
                    console.log("i should be false!");
                    firedUpon = false;
                }
            }
            if(playerCharacter._x>=towerX-proximity&&playerCharacter._x<=towerX+proximity&&playerCharacter._y>=towerY-proximity&&playerCharacter._y<=towerY+proximity&&firedUpon==false){
                outsideFire(updateInterval, towerX, towerY);
                firedUpon=true;
            }
            Crafty.bind("levelChange", function(){
                playerCharacter.unbind("Moved", towerFire);
                clearInterval(fireInt);
            });
        });
        //return this;
    }
});

function bulletTrackX(currentBullet){
    if (currentBullet._x<playerCharacter._x) {
        return  Math.abs(Math.abs(currentBullet._x - playerCharacter._x)/8 + currentBullet._x);
    }
    else {
        return currentBullet._x-Math.abs(currentBullet._x - playerCharacter._x)/8;
    }
}
function bulletTrackY(currentBullet){
    if (currentBullet._y<playerCharacter._y) {
        return Math.abs(Math.abs(currentBullet._y - playerCharacter._y)/8 + currentBullet._y);
    }
    else {
        return currentBullet._y-Math.abs(currentBullet._y - playerCharacter._y)/8;
    }
}
function outsideFire(updateInterval,towerX,towerY){
    var currentBullet = Crafty.e('Bullet, 2D, Canvas, Color, Collision')
        .attr({x: towerX, y: towerY, w: 10, h: 10})
        .color(0,0,0)
        .onHit("Player",function () {
            confirm("You Failed Level " + Crafty._current.slice(5));
            currentBullet.destroy();
            restart();
        })
        .onHit("Wall", function () {
            currentBullet.destroy();
        })
        .onHit("Floor", function () {
            currentBullet.destroy();
        })
    fireInt = setInterval(function () {
        currentBullet.x = bulletTrackX(currentBullet);
        currentBullet.y = bulletTrackY(currentBullet);
    }, updateInterval);
}}
