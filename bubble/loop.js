//color adjustable by user?
var d
var x 
var y
let rSlider, gSlider, bSlider;
var saveImageBtn

function setup() {
  createCanvas(windowWidth, windowHeight);

  rSlider = createSlider(0, 255, 0);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(20, 80);

  background(0,0,0)
}


function draw() {

  const rCol = rSlider.value();
  const gCol = gSlider.value();
  const bCol = bSlider.value();
  
  noStroke()
  for (var i = 0; i < 100; i++){
    for(var j = 0; j< 100; j++){
      d = 100
      x = i*d
      y = j*d
      
      r = map(i,0, 8, rCol,0)
      g = map(j,0, 8, gCol,0)
      b = map(i,0, 8, 0, bCol)

      // fill (r,g,b)
      stroke(255,255,255)
      fill(b/2,g,r)
      rect(x-40,y-40,d-10, d-10)
      fill(b,r/2,g)
      ellipse(x+5,y+5,d-10, d-10)
      fill(r,g/2,b/2)
      ellipse(x+5,y+5,d-30, d-30)
      fill(r/2,b,g)
      ellipse(x+5,y+5,d-50,d-50)
      fill(r,g,b/2)
      ellipse(x+5,y+5,d-70,d-70)
      fill(b/2,g/2,r)
      ellipse(x+5,y+5,d-90,d-90)
      stroke(255,255,255)
    }
  }
}

