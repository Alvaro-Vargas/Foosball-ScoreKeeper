var taunt = new Howl({
  src: ["./sounds/taunt.mp3"]
});

var goal = new Howl({
  src: ["./sounds/goal.mp3"]
});

var score1 = 0;
var score2 = 0;

const gl1 = document.getElementById("gl1");
const tn1 = document.getElementById("tn1");
const gl2 = document.getElementById("gl2");
const tn2 = document.getElementById("tn2");
const scr1 = document.getElementById("scr1");
const scr2 = document.getElementById("scr2");
const reset = document.getElementById("reset");

function addScore(element) {
  if (element === scr1) {
    element.innerText = ++score1;
  } else {
    element.innerText = ++score2;
  }
}

gl1.onclick = () => {
  goal.stop();
  goal.play();
  addScore(scr1);
};
tn1.onclick = () => {
  taunt.stop();
  taunt.play();
};
gl2.onclick = () => {
  goal.stop();
  goal.play();
  addScore(scr2);
};
tn2.onclick = () => {
  taunt.stop();
  taunt.play();
};

reset.onclick = () => {
  score1 = 0;
  score2 = 0;
  scr1.innerText = 0;
  scr2.innerText = 0;
  taunt.stop();
  goal.stop();
  stopTimer();
};

// TIMER
var timer = document.getElementById("timer");
var btnTimer = document.getElementById("btnTimer");
var timerRunning = 0;

var myTimer;

var min = 0;
var sec = 0;

function countSeconds() {
  sec++;

  if (sec < 10) {
    sec = "0" + sec;
  }

  if (sec === 60) {
    sec = 0;
    sec = "0" + sec;
    countMinutes();
  }
  setTimer();
}

function countMinutes() {
  min++;

  if (min === 2) {
    resetTimer();
    timer.innerText = "Time`s UP!";
  }
}

function setTimer() {
  timer.innerText = min + ":" + sec;
}

function resetTimer() {
  min = 0;
  sec = "0" + 0;
  setTimer();
}

function startTimer() {
  myTimer = setInterval(countSeconds, 1000);
  timerRunning = 1;
  btnTimer.innerText = "Stop!";
  btnTimer.classList.remove("btn-success");
  btnTimer.classList.add("btn-danger");
}

function stopTimer() {
  clearInterval(myTimer);
  timerRunning = 0;
  resetTimer();
  btnTimer.innerText = "Start Timer!";
  btnTimer.classList.remove("btn-danger");
  btnTimer.classList.add("btn-success");
}

function toggleTimer() {
  if (timerRunning === 0) {
    startTimer();
  } else {
    stopTimer();
  }
}

btnTimer.onclick = toggleTimer;
