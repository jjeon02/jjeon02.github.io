var sketchWidth;
var sketchHeight;
let bgimg;


function setup() {
    sketchWidth = document.getElementById("canvas").offsetWidth;
    sketchHeight =   document.getElementById("canvas").offsetHeight;

    let renderer = createCanvas(sketchWidth, sketchHeight);
    renderer.parent("canvas");

    // image(img, 0, 0, sketchWidth, sketchHeight);
    background(0, 0, 255);
}

function windowResized() {
    sketchWidth = document.getElementById("square").offsetWidth;
    sketchHeight = document.getElementById("square").offsetHeight;
    resizeCanvas(sketchWidth, sketchHeight);
}

function draw() {
    // background(bg);
    ellipse(mouseX, mouseY, 20, 20);
}

function clearArt(){clear();}
function saveArt(){save('jueun-jeon-art.jpg');}

let contact = "<strong class='center'>CONTACT ME:</strong><br>"
let linkedin = "<a href='https://www.linkedin.com/in/jueun-jeon-0436/' target='_blank'>" + "LinkedIn"+"</a>";
let behance = "<a href='https://www.behance.net/jueunjeon' target='_blank'>" + "Behance" + "</a>";
let email = "<a href='mailto:jjeon7@sva.edu' target='_blank'>" + "Email" + "</a>";
let resume = "<a href='about.html#resume'>" + "resume" + "</a>";
let github = "<a href='https://github.com/jjeon02' target='_blank'>" + "Github" + "</a>";

let footerText = contact + linkedin + " / " + behance + " / " + email + " / " + resume + " / " + github;

document.getElementById("footer").innerHTML = footerText;
console.log(footerText);

function openNav() {
    document.getElementById("sideNav").style.width= "100%";
}
  
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    console.log("reveal working")
  }
  
window.addEventListener("scroll", reveal);