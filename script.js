let icon="<img src='icon-2.svg' class=icon-star><br>"
let contact = "<strong class='center'>CONTACT</strong><br>"
let linkedin = "<a href='https://www.linkedin.com/in/jueun-jeon-0436/' target='_blank'>" + "LinkedIn"+"</a>";
// let behance = "<a href='https://www.behance.net/jueunjeon' target='_blank'>" + "Behance" + "</a>";
let github = "<a href='https://github.com/jjeon02' target='_blank'>" + "Github" + "</a>";
let email = "<a href='mailto:june.jeon@gmail.com' target='_blank'>" + "june.jeon@gmail.com" + "</a>";

let footerText =  contact + linkedin + " • " + github + " • " + email;

document.getElementById("footer").innerHTML = footerText;
console.log(footerText);

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
  console.log("reveal working");
}
  
window.addEventListener("scroll", reveal);

// // NAVIGATION
function openNav() {
  document.getElementById("sideNav").style.width= "100%";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}

