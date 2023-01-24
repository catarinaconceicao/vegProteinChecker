// --------BMR AND AMR CALCULATOR-------- //
const alertHeight = document.querySelector(".alert-height");
const generalCalculatorAlert = document.querySelector(
  ".alert-general-calculator"
);
const alertAge = document.querySelector(".alert-age");
const alertWeight = document.querySelector(".alert-weight");
const alertQuantity = document.querySelector(".alert-quantity");
const generalProteinAlert = document.querySelector(".general-protein-alert");

//Selecting buttons
const calculateBtn = document.querySelector(".calculate-btn");
const resetCalculatorBtn = document.querySelector(".reset-calculator-btn");

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

  if (age < 18 || isNaN(age) || age > 80) {
    alertAge.classList.remove("hidden");
    return;
  } else if (isNaN(height)) {
    alertWeight.classList.remove("hidden");
    alertHeight.classList.remove("hidden");
    return;
  } else if (weight < 40 || weight > 300 || height < 120 || height > 270) {
    alertWeight.classList.remove("hidden");
    alertHeight.classList.remove("hidden");
    return;
  } else if (isNaN(weight) || weight.includes(",")) {
    newQttyImputed = Number(weight.replace(",", "."));

    if (isNaN(newQttyImputed) || newQttyImputed > 300) {
      alertWeight.classList.remove("hidden");
      return;
    } else {
      switch (gender) {
        case "female":
          if (activity === "low") {
            calculateAndDisplayResults(BMRresultFem, low);
          } else if (activity === "light") {
            calculateAndDisplayResults(BMRresultFem, light);
          } else if (activity === "moderate") {
            calculateAndDisplayResults(BMRresultFem, moderate);
          } else if (activity === "active") {
            calculateAndDisplayResults(BMRresultFem, active);
          } else {
            calculateAndDisplayResults(BMRresultFem, intensive);
          }
          break;
        case "male":
          if (activity === "low") {
            calculateAndDisplayResults(BMRresultMale, low);
          } else if (activity === "light") {
            calculateAndDisplayResults(BMRresultMale, light);
          } else if (activity === "moderate") {
            calculateAndDisplayResults(BMRresultMale, moderate);
          } else if (activity === "active") {
            calculateAndDisplayResults(BMRresultMale, active);
          } else {
            calculateAndDisplayResults(BMRresultMale, intensive);
          }
          break;
      }
    }
  } else {
    switch (gender) {
      case "female":
        if (activity === "low") {
          calculateAndDisplayResults(BMRresultFem, low);
        } else if (activity === "light") {
          calculateAndDisplayResults(BMRresultFem, light);
        } else if (activity === "moderate") {
          calculateAndDisplayResults(BMRresultFem, moderate);
        } else if (activity === "active") {
          calculateAndDisplayResults(BMRresultFem, active);
        } else {
          calculateAndDisplayResults(BMRresultFem, intensive);
        }
        break;
      case "male":
        if (activity === "low") {
          calculateAndDisplayResults(BMRresultMale, low);
        } else if (activity === "light") {
          calculateAndDisplayResults(BMRresultMale, light);
        } else if (activity === "moderate") {
          calculateAndDisplayResults(BMRresultMale, moderate);
        } else if (activity === "active") {
          calculateAndDisplayResults(BMRresultMale, active);
        } else {
          calculateAndDisplayResults(BMRresultMale, intensive);
        }
        break;
    }
  }
});

resetCalculatorBtn.addEventListener("click", function () {
  document.querySelector(".age").value = "";
  document.querySelector(".weight").value = "";
  document.querySelector(".height").value = "";
  resultsDiv.classList.add("hidden");
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

resetBtn.addEventListener("click", function () {
  proteinChartRow.innerHTML = "";
  proteinSumValue.innerHTML = "0";
});

proteinBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let quantityInputed = document.querySelector(".quantity").value;
  const food = document.querySelector("#food").value;
  const newProteinValue = calculateProtein(food, quantityInputed);

  if (quantityInputed > 1000 || quantityInputed < 1) {
    alertQuantity.classList.remove("hidden");
    return;
  } else if (isNaN(quantityInputed) || quantityInputed.includes(",")) {
    alertQuantity.classList.add("hidden");
    newQttyImputed = Number(quantityInputed.replace(",", "."));

    if (isNaN(newQttyImputed) || newQttyImputed > 1000) {
      generalProteinAlert.classList.remove("hidden");
      return;
    } else {
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
      return;
    }
  } else {
    generalProteinAlert.classList.add("hidden");
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
  }
});

//////////////////////////////////////////////////////////////////////
