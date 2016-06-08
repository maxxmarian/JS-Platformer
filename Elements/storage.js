
function levelTime(level){
	this.getSeconds = function(level){
		levelTime=localStorage.getItem(level);
		levelSeconds=parseInt(localStorage.getItem(level+"Minutes"))
		levelMinutes=parseInt(localStorage.getItem(level+"Seconds"));
		return levelMinutes*60+levelSeconds;
	}
	this.set = function(level){
		localStorage.setItem(level, timer.timeDisplay);
		localStorage.setItem(level+"Minutes",timer.elapsedMinutes.toString());
		localStorage.setItem(level+"Seconds",timer.elapsedSeconds.toString());
	}
	this.compareTimes = function(level, crrs)
}