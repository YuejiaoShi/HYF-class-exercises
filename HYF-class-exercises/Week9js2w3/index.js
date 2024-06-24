const firstButton = document.getElementById("first");
const secondButton = document.getElementById("second");
const thirdButton = document.getElementById("third");

// Click counter
let numInitial = 0;
function count() {
  console.log(numInitial);
  return (numInitial += 1);
}
firstButton.addEventListener("click", count);

function countUp() {
  console.log(numInitial);
  return (numInitial += 1);
}
secondButton.addEventListener("click", countUp);

// Delay clicker
function waitThreeSec() {
  setTimeout(() => console.log("This text was delayed by 3 seconds"), 3000);
}
thirdButton.addEventListener("click", waitThreeSec);

// Page onload
document.addEventListener("DOMContentLoaded", () =>
  console.log("DOM fully loaded and parsed")
);

// Mouse position
const mouseMovePositionSentence = document.getElementById(
  "mouse-move-position"
);
function mouseMovePosition(event) {
  mouseMovePositionSentence.innerText =
    "Mouse Move Position: clientX: " +
    event.clientX +
    " - clientY: " +
    event.clientY;
}

const mouseClickPositionSentence = document.getElementById(
  "mouse-click-position"
);
function mouseClickPosition(event) {
  mouseClickPositionSentence.innerText =
    "Mouse Click Position: clientX: " +
    event.clientX +
    " - clientY: " +
    event.clientY;
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", mouseClickPosition)
);

document.addEventListener("mousemove", mouseMovePosition);

// mouse movement average
window.addEventListener("mousemove", mouseMove);

const arrayX = [];
const arrayY = [];

function mouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;
  arrayX.push(x);
  arrayY.push(y);
}

const calAve = (array) => {
  const sum = array.reduce((acc, el) => acc + el);
  return sum / array.length;
};

setTimeout(logOutAve, 2000);

function logOutAve() {
  if (arrayX.length > 0 && arrayY.length > 0) {
    const aveX = calAve(arrayX).toFixed(0);
    const aveY = calAve(arrayY).toFixed(0);
    console.log(`X average position: ${aveX}, X average position: ${aveY}`);
  } else {
    console.log("No mouse movement detected.");
  }
}
