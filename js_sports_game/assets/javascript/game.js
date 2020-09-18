let shootButton = document.querySelector("#teamone-shoot-button");
let numshots = document.querySelector("#teamone-numshots");
let teamone_goals = document.querySelector("#teamone-numgoals");
let teamtwo_goals = document.querySelector("#teamtwo-numgoals");
let reset = document.querySelector("#reset-button");
let num_resets = document.querySelector("#num-resets");

shootButton.addEventListener("click", function () {
  console.log("shoot button clicked");

  let newNumShots = Number(numshots.innerHTML) + 1;
  numshots.innerHTML = newNumShots;
  if (Math.random() * 100 < 50) {
    console.log("goal");
    let newNumGoals = Number(teamone_goals.innerHTML) + 1;
    teamone_goals.innerHTML = newNumGoals;
  }
});

let rightShootButton = document.querySelector("#teamtwo-shoot-button");
let teamTwoNumShot = document.querySelector("#teamtwo-numshots");
rightShootButton.addEventListener("click", function () {
  console.log("right shoot button clicked");
  let newNumShot = Number(teamTwoNumShot.innerHTML) + 1;
  teamTwoNumShot.innerHTML = newNumShot;

  if (Math.random() * 100 < 50) {
    console.log("goal");
    let newGoalTwo = Number(teamtwo_goals.innerHTML) + 1;
    teamtwo_goals.innerHTML = newGoalTwo;
  }

  function PlaySound(soundObj) {
    var sound = document.getElementById();
    sound.Play();
  }
});

reset.addEventListener("click", function () {
  console.log("reset button clicked");

  reset = 0;
  numshots.innerHTML = reset;
  teamTwoNumShot.innerHTML = reset;
  teamone_goals.innerHTML = reset;
  teamtwo_goals.innerHTML = reset;

  let newNumResets = Number(num_resets.innerHTML) + 1;
  num_resets.innerHTML = newNumResets;
});
