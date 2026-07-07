const replayButton = document.getElementById("replayButton");
const steps = document.querySelectorAll(".step");

let currentStep = 0;
let replayTimer = null;

function clearActiveSteps() {
  steps.forEach((step) => step.classList.remove("active"));
}

function runReplay() {
  clearInterval(replayTimer);
  clearActiveSteps();

  currentStep = 0;
  steps[currentStep].classList.add("active");

  replayTimer = setInterval(() => {
    clearActiveSteps();

    currentStep += 1;

    if (currentStep >= steps.length) {
      clearInterval(replayTimer);
      steps[steps.length - 1].classList.add("active");
      return;
    }

    steps[currentStep].classList.add("active");
  }, 900);
}

if (replayButton) {
  replayButton.addEventListener("click", runReplay);
}

window.addEventListener("load", runReplay);
