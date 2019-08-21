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
  goal.play();
  addScore(scr1);
};
tn1.onclick = () => {
  taunt.play();
};
gl2.onclick = () => {
  goal.play();
  addScore(scr2);
};
tn2.onclick = () => {
  taunt.play();
};

reset.onclick = () => {
  score1 = 0;
  score2 = 0;
  scr1.innerText = 0;
  scr2.innerText = 0;
};
