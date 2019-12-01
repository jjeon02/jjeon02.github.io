var counter=0;
var timeleft= 60;

function convertSeconds(s){
    var min = floor(s/60);
    var sec = s % 60 ;
    return min + ' ' + 'min' + ' ' + sec + ' ' + 'sec';
    
}

function setup(){
    var timer = select('#timer');
    timer.html(convertSeconds(counter));
    // html id & javascript

    function timeIt(){
        counter++;
        timer.html(convertSeconds(counter));
    }
    //every second increase the counter & update dom element

    setInterval(timeIt,1000);
    // want this even to happen every milli-seconds
}


// countup

// let counter = 0;

// function setup(){
// //   noCanvas();//limit animation
  
//   var timer = select('#timer');
//   timer.html('0'); //insert text
  
//   function timeIt(){
//     counter ++;
//     timer.html(counter);
//   }
  
//   setInterval(timeIt, 1000);//native function 1000ms =1 s
//   //request animationframe is also another func
// }
