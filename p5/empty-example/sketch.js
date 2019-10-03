

var region = {
  x: 50,
  y: 50,
  w:50,
  h:50,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
	fill(20);

	for (var i = 0;i<100; 1+= 100){
		ellipse(10+i*60,region.y,10,10);
	}
  
}

// function drawCircles(a,b){

// 	let oneX= mouseX > region.x
// 	let oneY= mouseY > region.y
// 	let twoX= mouseX < region.x + region.w
// 	let twoY= mouseY < region.y + region.h

// 	if (oneX && oneY && twoX && twoY){
// 	  	ellipse(region.x,region.y,10,10);
// 	}
// 	else{
// 	  	ellipse(region.x+10,region.y+10,10,10);
// 	}
// }

