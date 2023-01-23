// --------BMR AND AMR CALCULATOR-------- //
const alertHeight = document.querySelector(".alert-height");
const generalCalculatorAlert = document.querySelector(
  ".alert-general-calculator"
);
const alertAge = document.querySelector(".alert-age");
const alertWeight = document.querySelector(".alert-weight");
const alertQuantity = document.querySelector(".alert-quantity");

//Selecting buttons
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

    AMRresult = Math.round(BMRbyGender * activityLevel);
    proteinMin = Math.round(AMRresult * 0.1);
    proteinMax = Math.round(AMRresult * 0.35);

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

// --------PROTEIN CHART-------- //

// const proteinChartDiv = document.querySelector(".protein-chart");
const proteinBtn = document.querySelector(".protein-button");
const resetBtn = document.querySelector(".reset-button");
const proteinChartRow = document.querySelector(".protein-chart-rows");
const protFoodArr = [];
const proteinSumValue = document.querySelector(".default-protein-sum-value");

const proteinPer100grams = {
  tofu: 13,
  tempeh: 19,
  seitan: 75,
  lentils: 9,
  chickpeas: 19,
  peas: 5,
  peanuts: 26,
  almonds: 21,
  cashew: 18,
  quinoa: 5,
  egg: 13,
  nutritionalYeast: 50,
};

const calculateProtein = function (food, quantity) {
  return (Number(proteinPer100grams[food]) * Number(quantity)) / 100;
};

proteinBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let quantityInputed = document.querySelector(".quantity").value;
  const food = document.querySelector("#food").value;

  const newProteinValue = calculateProtein(food, quantityInputed);

  if (quantityInputed > 1000 || quantityInputed < 1) {
    alertQuantity.classList.remove("hidden");
    console.log(quantityInputed);
    return;
  }
  if (quantityInputed.includes(",")) {
    alertQuantity.classList.add("hidden");

    newQttyImputed = Number(quantityInputed.replace(",", "."));

    const html = `<div class="chart-row"> <b>${newQttyImputed}g</b> of ${food} contains <b>${calculateProtein(
      food,
      newQttyImputed
    )} gr</b> of protein</div>`;

    proteinChartRow.insertAdjacentHTML("beforeend", html);
    protFoodArr.push(calculateProtein(food, newQttyImputed));
    const initialValue = 0;
    const sum = protFoodArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    proteinSumValue.innerHTML = sum;

    console.log(newQttyImputed);
  } else {
    alertQuantity.classList.add("hidden");
    const html = `<div class="chart-row"> <b>${quantityInputed}g</b> of ${food} contains <b>${newProteinValue} gr</b> of protein</div>`;
    proteinChartRow.insertAdjacentHTML("beforeend", html);
    protFoodArr.push(newProteinValue);
    const initialValue = 0;
    const sum = protFoodArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    proteinSumValue.innerHTML = sum;
    console.log(quantityInputed);
  }
});

resetBtn.addEventListener("click", function () {
  proteinChartRow.innerHTML = "";
  proteinSumValue.innerHTML = "0";
});
a = "1,2";
