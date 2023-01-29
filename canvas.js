var sketchWidth;
var sketchHeight;

function setup() {

sketchWidth = document.getElementById("canvas").offsetWidth;
sketchHeight =   document.getElementById("canvas").offsetHeight;

let renderer = createCanvas(sketchWidth, sketchHeight);
renderer.parent("canvas");

background(0, 0, 255);
}

function windowResized() {
sketchWidth = document.getElementById("square").offsetWidth;
sketchHeight = document.getElementById("square").offsetHeight;
resizeCanvas(sketchWidth, sketchHeight);
}

function draw() {
// background(0,0,255);
    if (mouseIsPressed) {
    fill(255);
    ellipse(mouseX, mouseY, 20, 20);
    } 
}

function clearArt(){clear();}
function saveArt(){save('jueun-jeon-art.jpg');}