/**
 * Created by maxx on 5/23/16.
 */
timer.elapsedSeconds=0;
var secondsDisplay=0;
timer.elapsedMinutes=0;
//var timerEntity;
setInterval(function(){timer()},1000);

function timer() {

    timer.elapsedSeconds = timer.elapsedSeconds + 1;
    if (timer.elapsedSeconds >= 60) {
        timer.elapsedMinutes = timer.elapsedSeconds / 60;
        timer.elapsedSeconds = 0;
    }
    if (timer.elapsedSeconds === 0) {
        secondsDisplay = timer.elapsedSeconds.toString() + "0"
    }
    else {
        secondsDisplay = timer.elapsedSeconds.toString();
    }
    if (timer.elapsedSeconds>0&&timer.elapsedSeconds<10){
        secondsDisplay = "0" + timer.elapsedSeconds.toString();
    }
    timer.timeDisplay = timer.elapsedMinutes.toString() + ":" + secondsDisplay;
    if (timer.timerEntity!==undefined){
        timer.timerEntity.destroy()
    }
    timer.timerEntity = Crafty.e("2D, DOM, Text").attr({ x: abs(Crafty.viewport._x)+ 50, y: abs(Crafty.viewport._y) + 50}).text('Elapsed Time:'+ timeDisplayCheck());
}
function timeDisplayCheck(){
    if (timer.timeDisplay===undefined){
        return "0:00"
    }
    else {
        return timer.timeDisplay;
    }
}