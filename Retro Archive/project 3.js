

// 1.

window.onload = function() {
countUpFromTime("Mar 8, 1895 00:00:00", 'countup1'); 
};

function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = (now - countFrom);
    
  var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;
    
  days = Math.floor(timeDifference / (secondsInADay) * 1);
  years = Math.floor(days / 365);
  if (years > 1){ days = days - (years * 365) }
  hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
  mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('years')[0].innerHTML = years;
  idEl.getElementsByClassName('days')[0].innerHTML = days;
  idEl.getElementsByClassName('hours')[0].innerHTML = hours;
  idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
  idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}

// 1.

      var minutesLabel = document.getElementById("minutes");
      var secondsLabel = document.getElementById("seconds");
      var totalSeconds = 0;
      setInterval(setTime, 1000);

      function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
      }

      function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }
// 2.
      var minutesLabelTwo = document.getElementById("minutes2");
      var secondsLabelTwo = document.getElementById("seconds2");
      var totalSecondsTwo = 0;
      setInterval(setTimeTwo, 1000);

      function setTimeTwo() {
        ++totalSecondsTwo;
        secondsLabelTwo.innerHTML = padTwo(totalSecondsTwo % 60);
        minutesLabelTwo.innerHTML = padTwo(parseInt(totalSecondsTwo / 60));
      }

      function padTwo(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }
// 3.

      var minutesLabelThree = document.getElementById("minutes3");
      var secondsLabelThree = document.getElementById("seconds3");
      var totalSecondsThree = 0;
      setInterval(setTimeThree, 1000);

      function setTimeThree() {
        ++totalSecondsThree;
        secondsLabelThree.innerHTML = padThree(totalSecondsThree % 60);
        minutesLabelThree.innerHTML = padThree(parseInt(totalSecondsThree / 60));
      }

      function padThree(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }

// 4.
      var minutesLabelFour = document.getElementById("minutes4");
      var secondsLabelFour = document.getElementById("seconds4");
      var totalSecondsFour = 0;
      setInterval(setTimeFour, 1000);

      function setTimeFour() {
        ++totalSecondsFour;
        secondsLabelFour.innerHTML = padFour(totalSecondsFour % 60);
        minutesLabelFour.innerHTML = padFour(parseInt(totalSecondsFour / 60));
      }

      function padFour(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }

//5. 
      var minutesLabelFive = document.getElementById("minutes5");
      var secondsLabelFive = document.getElementById("seconds5");
      var totalSecondsFive = 0;
      setInterval(setTimeFive, 1000);

      function setTimeFive() {
        ++totalSecondsFive;
        secondsLabelFive.innerHTML = padFive(totalSecondsFive % 60);
        minutesLabelFive.innerHTML = padFive(parseInt(totalSecondsFive / 60));
      }

      function padFive(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }
//6. 
      var minutesLabelSix = document.getElementById("minutes6");
      var secondsLabelSix = document.getElementById("seconds6");
      var totalSecondsSix = 0;
      setInterval(setTimeSix, 1000);

      function setTimeSix() {
        ++totalSecondsSix;
        secondsLabelSix.innerHTML = padSix(totalSecondsSix % 60);
        minutesLabelSix.innerHTML = padSix(parseInt(totalSecondsSix / 60));
      }

      function padSix(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }

//7. 
      var minutesLabelSeven= document.getElementById("minutes7");
      var secondsLabelSeven = document.getElementById("seconds7");
      var totalSecondsSeven = 0;
      setInterval(setTimeSeven, 1000);

      function setTimeSeven() {
        ++totalSecondsSeven;
        secondsLabelSeven.innerHTML = padSeven(totalSecondsSeven % 60);
        minutesLabelSeven.innerHTML = padSeven(parseInt(totalSecondsSeven / 60));
      }

      function padSeven(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }

//8.
      var minutesLabelEight = document.getElementById("minutes8");
      var secondsLabelEight = document.getElementById("seconds8");
      var totalSecondsEight = 0;
      setInterval(setTimeEight, 1000);

      function setTimeEight() {
        ++totalSecondsEight;
        secondsLabelEight.innerHTML = padEight(totalSecondsEight % 60);
        minutesLabelEight.innerHTML = padEight(parseInt(totalSecondsEight / 60));
      }

      function padEight(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }

//9.
      var minutesLabelNine = document.getElementById("minutes9");
      var secondsLabelNine = document.getElementById("seconds9");
      var totalSecondsNine = 0;
      setInterval(setTimeNine, 1000);

      function setTimeNine() {
        ++totalSecondsNine;
        secondsLabelNine.innerHTML = padNine(totalSecondsNine % 60);
        minutesLabelNine.innerHTML = padNine(parseInt(totalSecondsNine / 60));
      }

      function padNine(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }
//10
      var minutesLabelTen = document.getElementById("minutes10");
      var secondsLabelTen = document.getElementById("seconds10");
      var totalSecondsTen = 0;
      setInterval(setTimeTen, 1000);

      function setTimeTen() {
        ++totalSecondsTen;
        secondsLabelTen.innerHTML = padTen(totalSecondsTen % 60);
        minutesLabelTen.innerHTML = padTen(parseInt(totalSecondsTen / 60));
      }

      function padTen(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }

//11
      var minutesLabelElev = document.getElementById("minutes11");
      var secondsLabelElev = document.getElementById("seconds11");
      var totalSecondsElev = 0;
      setInterval(setTimeElev, 1000);

      function setTimeElev() {
        ++totalSecondsElev;
        secondsLabelElev.innerHTML = padElev(totalSecondsElev % 60);
        minutesLabelElev.innerHTML = padElev(parseInt(totalSecondsElev / 60));
      }

      function padElev(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }



// toggle. 
  function myToggle(e) {
    const item = document.querySelector(`[data-id=${e.target.id}]`);
    item.toggleAttribute('hidden'); 
  }

  const chapters = document.querySelectorAll('details');
  chapters.forEach((chapter) => {
    chapter.addEventListener('toggle', logItem);
  });

  // 
