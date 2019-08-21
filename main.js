var taunt = new Howl({
  src: ["./sounds/taunt.mp3"]
});

var goal = new Howl({
  src: ["./sounds/goal.mp3"]
});

const gl1 = document.getElementById("gl1");

const tn1 = document.getElementById("tn1");

const gl2 = document.getElementById("gl2");

const tn2 = document.getElementById("tn2");

gl1.onclick = () => {
  goal.play();
};
tn1.onclick = () => {
  taunt.play();
};
gl2.onclick = () => {
  goal.play();
};
tn2.onclick = () => {
  taunt.play();
};
