//Common.
      window.onload=function() {
        doTime();
        doTimeTwo();
        doTimeThree();
        doTimeFour();
        doTimeFive();
        doTimeSix();
        doTimeSeven();
        doTimeEight();
        doTimeNine();
        doTimeTen();
        doTimeEleven();
      }
// 1. Time Machine

      function doTime() {

       now=new Date ();
       then=new Date ('feb,06,2019,22:31:00');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer').firstChild.nodeValue=

       '125'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTime()',1000);
      }
// 2. War of the Worlds

      function doTimeTwo() {

       now=new Date ();
       then=new Date ('Jan,01,2019,12:00:07');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer2').firstChild.nodeValue=

       '121'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTimeTwo()',1000);
      }
// 3. Trip Moon

      function doTimeThree() {

       now=new Date ();
       then=new Date ('Sep,1,2018,12:00:07');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer3').firstChild.nodeValue=

       '117'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTimeThree()',1000);
      }

// 4. Earth Stood

      function doTimeFour() {

       now=new Date ();
       then=new Date ('Sep,28,2018,16:06:43');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer4').firstChild.nodeValue=

       '68'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTimeFour()',1000);
      }
// 5. Ape

      function doTimeFive() {

       now=new Date ();
       then=new Date ('March,27,2019,16:17:00');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer5').firstChild.nodeValue=

       '51'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTimeFive()',1000);
      }

// 6. tron 

      function doTimeSix() {

       now=new Date ();
       then=new Date ('July,9,2018,16:07:53');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer6').firstChild.nodeValue=

       '36'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTimeSix()',1000);
      }
// 7. 1984

      function doTimeSeven() {

       now=new Date ();
       then=new Date ('Sep,28,2018,12:30:37');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer7').firstChild.nodeValue=

       '35'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTimeSeven()',1000);
      }
// 8. Terminator

      function doTimeEight() {

       now=new Date ();
       then=new Date ('August,29,2018,12:00:11');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer8').firstChild.nodeValue=

       '22'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTimeEight()',1000);
      }

// 9. 2001

      function doTimeNine() {

       now=new Date ();
       then=new Date ('April,3,2018,23:00:05');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer9').firstChild.nodeValue=

       '18'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTimeNine()',1000);
      }
      
// 10. Back to Future

      function doTimeTen() {

       now=new Date ();
       then=new Date ('April,3,2018,08:10:34');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer10').firstChild.nodeValue=

       '3'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTimeTen()',1000);
      }

// 11. Blade Runner

      function doTimeEleven() {

       now=new Date ();
       then=new Date ('June,25,2018,00:04:03');

       difference=(now-then);

       days=Math.floor(difference/(60*60*1000*24)*1);
       hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
       mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
       secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

       document.getElementById('timer11').firstChild.nodeValue=

       '0'+' '+':'+' '+days+' '+':'+' '+hours+' '+':'+' '+mins+' '+':'+' '+secs;

       setTimeout('doTimeEleven()',1000);
      }
      
