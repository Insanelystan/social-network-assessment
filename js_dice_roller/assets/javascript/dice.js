let showRolls = document.querySelector("#roll-die");
let rollButton = document.querySelector("#roll-button");
let userInput = document.querySelector("#user-input");
let totalDie = document.querySelector("#total-die");
let totalRolls = document.querySelector("#total-rolls");

rollButton.addEventListener("click", function () {
  let input = userInput.value;
  let index = 0;
  let dieRolls = [];

  // console.log("You rolled!");
  while (index < input) {
    let totalRolls = Math.floor(Math.random() * 6) + 1;
    console.log(totalRolls);
    index++;
    dieRolls.push(totalRolls);
    console.log(dieRolls);
  }
  let sum = dieRolls.reduce(function (a, b) {
    return a + b;
  }, 0);
  console.log(sum);
  let newTotal = totalRolls.innerHTML;
  totalRolls.innerHTML = sum;
  showRolls.addEventListener("click", function () {
    // console.log("All rolls shown");
    const newtotalRolls = '<li class="total-die">' + dieRolls + "</li>";
    totalDie.innerHTML += newtotalRolls;
  });
});
