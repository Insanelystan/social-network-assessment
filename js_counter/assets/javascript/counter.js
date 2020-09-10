let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");
incrementButton.addEventListener("click", function () {
  console.log("+ button clicked");
  let newCounterValue = Number(counter.innerHTML) + 1;
  counter.innerHTML = newCounterValue;
  if (newCounterValue >= 10) {
    counter.style.color = "red";
  }
});

decrementButton.addEventListener("click", function () {
  console.log("- button clicked");
  let newCounterValue = Number(counter.innerHTML) - 1;
  if (counter.innerHTML > 0) {
    counter.innerHTML = newCounterValue;
  }
  if (newCounterValue < 10) {
    counter.style.color = "black";
  }
});
