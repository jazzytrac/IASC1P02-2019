var start= new Date();

function stopTime(){
  var stop = new Date();
  var stopMilli= stop.getTime();
  var difference= stopMilli - startMili;
  difference= difference/600;
  alert("it has been:"+difference+" seconds")
}
