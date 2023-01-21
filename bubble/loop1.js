var d
var x 
var y

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0);
}

function draw() {
  pattern ()
}

function pattern(){
  noFill()
  for (var i = 0; i < 100; i++){
    for(var j = 0; j< 100; j++){
      d = 100
      x = i*d
      y = j*d

      rect(x,y,d,d)
      rect(x-40,y-40,d-20, d-20)
      rect(x-30,y-30,d-40, d-40)
      rect(x-20,y-20,d-60,d-60)
      rect(x-10,y-10,d-80,d-80)

      stroke(i*20-50,j*40-50,i*j*30-50);
    }
  }
}
