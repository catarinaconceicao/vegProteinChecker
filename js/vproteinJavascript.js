//Selecting button
const calculateBtn = document.querySelector(".calculate-btn");

let AMRresult = "";
let proteinMin = "";
let proteinMax = "";

//Selecting results <div>
const resultsDiv = document.querySelector(".display-results");

const init = () => {
  resultsDiv.classList.add("hidden");
};

const AMRresultDisplay = document.querySelector(".AMR-result");
const proteinMinDisplay = document.querySelector(".protein-Min");
const proteinMaxDisplay = document.querySelector(".protein-Max");

// init();
// Calculate Protein Minimums and Maximums
calculateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Selecting BMR formula values
  const age = document.querySelector(".age").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const weight = document.querySelector(".weight").value;
  const height = document.querySelector(".height").value;
  const activity = document.querySelector("#activity").value;

  const BMRresultFem = 10 * weight + 6.25 * height - 5 * age - 161;
  const BMRresultMale = 10 * weight + 6.25 * height - 5 * age + 5;

  // Selecting activity levels for AMR
  const low = 1.2;
  const light = 1.375;
  const moderate = 1.55;
  const active = 1.725;
  const intensive = 1.9;

  const calculateAndDisplayResults = function (BMRbyGender, activityLevel) {
    init();
    resultsDiv.classList.remove("hidden");

    AMRresult = BMRbyGender * activityLevel;
    proteinMin = AMRresult * 0.1;
    proteinMax = AMRresult * 0.35;

    AMRresultDisplay.innerHTML = `${AMRresult}`;
    proteinMinDisplay.innerHTML = `${proteinMin}`;
    proteinMaxDisplay.innerHTML = `${proteinMax}`;
  };

  if (age < 18) {
    alert(`Age needs to be equal or higher than 18`);
    return;
  }

  if (gender === "female") {
    if (activity === "low") {
      calculateAndDisplayResults(BMRresultFem, low);
    }
    if (activity === "light") {
      calculateAndDisplayResults(BMRresultFem, light);
    }
    if (activity === "moderate") {
      calculateAndDisplayResults(BMRresultFem, moderate);
    }
    if (activity === "active") {
      calculateAndDisplayResults(BMRresultFem, active);
    }
    if (activity === "intensive") {
      calculateAndDisplayResults(BMRresultFem, intensive);
    }
  }

  if (gender === "male") {
    if (activity === "low") {
      calculateAndDisplayResults(BMRresultMale, low);
    }
    if (activity === "light") {
      calculateAndDisplayResults(BMRresultMale, light);
    }
    if (activity === "moderate") {
      calculateAndDisplayResults(BMRresultMale, moderate);
    }
    if (activity === "active") {
      calculateAndDisplayResults(BMRresultMale, active);
    }
    if (activity === "intensive") {
      calculateAndDisplayResults(BMRresultMale, intensive);
    }

    return;
  }
});
