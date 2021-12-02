//when buttons include stop button.
let mili = 00;
let sec = 00;
let min = 00;
let nCounting;
let showMilisec = document.querySelector(".mil-sec");
let showSec = document.querySelector(".sec");
let showMin = document.querySelector(".min");
let startCount = document.querySelector(".start");
let stopCount = document.querySelector(".stop");
let resetCount = document.querySelector(".reset");

//show leading zero
function showLeadingZero() {
  if (mili <= 9) {
    showMilisec.innerHTML = "0" + mili;
  } else {
    showMilisec.innerHTML = mili;
  }

  if (sec <= 9) {
    showSec.innerHTML = "0" + sec;
  } else {
    showSec.innerHTML = sec;
  }

  if (min <= 9) {
    showMin.innerHTML = "0" + min;
  } else {
    showMin.innerHTML = min;
  }
}

//count miliseconds, seconds, and minutes
function counter() {
  showLeadingZero();
  mili++;
  if (mili === 100) {
    mili = 0;
    sec++;
  }
  if (sec === 60) {
    sec = 0;
    min++;
  }
}

//start counter
function startCounter() {
  nCounting = setInterval(counter, 10);
  startCount.innerHTML = "pause";
  startCount.disabled = true;
  stopCount.disabled = false;
  stopCount.style.background = "#0097a7";
  stopCount.style.color = "white";
  stopCount.innerHTML = "pause";
}

//reset counter
function resetCounter() {
  mili = 00;
  showMilisec.innerHTML = "00";
  sec = 00;
  showSec.innerHTML = "00";
  min = 00;
  showMin.innerHTML = "00";
  stopCounter();
  startCount.disabled = false;
  startCount.innerHTML = "start";
  stopCount.style.background = "#0097a7";
  stopCount.style.color = "white";
  stopCount.innerHTML = "pause";
  stopCount.disabled = true;
}

//stop counter
function stopCounter() {
  clearInterval(nCounting);
  nCounting = null;
  startCount.innerHTML = "resume";
  stopCount.style.background = "white";
  stopCount.style.color = "#0097a7";
  stopCount.innerHTML = "paused";
  startCount.disabled = false;
}

//when the start button is clicked
startCount.addEventListener("click", startCounter);

//when the stop button clicked
stopCount.addEventListener("click", stopCounter);

//when the rest button is clicked
resetCount.addEventListener("click", resetCounter);
