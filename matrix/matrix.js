let matrix;
let timeText;
let sec;
let min;
let hr;

function setup(){
  createCanvas(windowWidth,windowHeight);
  matrix = createCapture(VIDEO);
  matrix.size(100, 80);
  pixelDensity(1);
  matrix.hide();
}

function draw(){
  background(0);
  sec = second();
  min = minute();
  hr = hour();

  timeText = hr +':' + min +':' +  sec

  let w = width / matrix.width;
  let h = height / matrix.height;
  matrix.loadPixels();

  for (let i = 0; i < matrix.width; i++){
    for (let j = 0; j < matrix.height; j++){
      const pixelIndex = (i + j * matrix.width) * 4;
      const r = matrix.pixels[pixelIndex+0];
      const g = matrix.pixels[pixelIndex+1];
      const b = matrix.pixels[pixelIndex+2];
      const avg = (r+g+b)/3;

      noStroke();
      fill(25,240,30);

      const len = timeText.length;
      const charIndex = map(avg,0,255,len,0)

      textSize(w)
      textAlign(CENTER,CENTER)
      text(timeText.charAt(charIndex), i*w+w*0.5,j*h+h*0.5);

    }
  }
  fill(255,0,0);
  textSize(50);
  text(hr +':' + min +':' +  sec, 120,50);
}