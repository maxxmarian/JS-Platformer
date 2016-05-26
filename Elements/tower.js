/**
 * Created by maxx on 5/24/16.
 */
Crafty.c("Tower", {
    init: function () {
        Crafty.sprite("assets/watchtower.png", {towersprite: [0, 0, 50, 120]});
        this.addComponent('2D, Color, Canvas, towersprite');
        this.color(255, 255, 255);
        //Crafty.circle(this.x,this.y,15);
        // this.w = 30;
        // this.h = 30;

    },
    place: function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    },
    fire: function (updateInterval) {
        outsideFire(updateInterval, this.x, this.y);
        return this;
    },
    delayedFire: function (delay, updateInterval) {
        setTimeout(function () {
            outsideFire(updateInterval, this.x, this.y)
        }, delay);
    },
    proximityFire: function (proximity, updateInterval, towerX, towerY) {
        var firedUpon = true;
        playerCharacter.bind("Moved", function (moveData) {
            if (firedUpon) {
                if (playerCharacter._x <= towerX - proximity || playerCharacter._x >= towerX + proximity || playerCharacter._y <= towerY - proximity || playerCharacter._y >= towerY + proximity) {
                    console.log("i should be false!");
                    firedUpon = false;
                }
            }
            if (playerCharacter._x >= towerX - proximity && playerCharacter._x <= towerX + proximity && playerCharacter._y >= towerY - proximity && playerCharacter._y <= towerY + proximity && firedUpon == false) {
                outsideFire(updateInterval, towerX, towerY);
                firedUpon = true;
            }
        });
        //return this;
    }
});

function bulletTrackX(currentBullet) {
    if (currentBullet._x < playerCharacter._x) {
        return Math.abs(Math.abs(currentBullet._x - playerCharacter._x) / 8 + currentBullet._x);
    }
    else {
        return currentBullet._x - Math.abs(currentBullet._x - playerCharacter._x) / 8;
    }
}
function bulletTrackY(currentBullet) {
    if (currentBullet._y < playerCharacter._y) {
        return Math.abs(Math.abs(currentBullet._y - playerCharacter._y) / 8 + currentBullet._y);
    }
    else {
        return currentBullet._y - Math.abs(currentBullet._y - playerCharacter._y) / 8;
    }
}
function outsideFire(updateInterval, towerX, towerY) {
    var currentBullet = Crafty.e('Bullet, 2D, Canvas, Color, Collision')
        .attr({x: towerX, y: towerY, w: 10, h: 10})
        .color(0, 0, 0)
        .checkHits('Player', 'Wall')
        .bind("HitOn", function (hitData) {
            var hitObject = hitData[0].obj.__c;
            if (hitObject.Player) {
                confirm("You Failed Level " + Crafty._current.slice(5));
                restart();
            }
            if (hitObject.Wall || hitObject.Floor) {
                currentBullet.destroy();
            }
        });
    setInterval(function () {
        currentBullet.x = bulletTrackX(currentBullet);
        currentBullet.y = bulletTrackY(currentBullet);
    }, updateInterval);
}

