"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Alex A Somoza
   Date: 2-14-19 

   Filename:   ph_clock.js     

*/
//These variables set up how much time is left to place the order by giving the amount of minutes/seconds left a number value and calculating the time left with the equation below.
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = (minsLeft * 60) + secsLeft;
//This variable runs the coutdown function every second.
var clockID = setInterval("countdown()", 1000);
//this function calculates the number of minutes/seconds left as well as display the times in the docuement.
function countdown() {
    minsLeft = Math.floor(timeLeft / 60);
    secsLeft = timeLeft - (minsLeft * 60);

    var minsString = addLeadingZero(minsLeft);

    var secsString = addLeadingZero(secsLeft);

    document.getElementById("minutes").innerHTML = minsString;

    document.getElementById("seconds").innerHTML = secsString;

    checkTimer();


    timeLeft--;
}
//This function notifies the user when the amount of time to place the order has run out by diplaying text and it also stops the counter when time is up.
function stopClock() {
    document.getElementById("TimeHead").insertAdjacentHTML('beforeend', "<br /> (Order Expired)");
    clearInterval(clockID);
}




/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}