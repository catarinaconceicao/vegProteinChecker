//try creating a function with every variable inside, that only triggers on click, use  e.preventDefault();

const calculateBtn = document.querySelector(".calculate-btn");
let AMRresult = "";

calculateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let age = document.querySelector(".age").value;
  let gender = document.querySelector("input[name='gender']:checked").value;
  let weight = document.querySelector(".weight").value;
  let height = document.querySelector(".height").value;
  let activity = document.querySelector("#activity").value;

  let BMRresultFem = 10 * weight + 6.25 * height - 5 * age - 161;
  let BMRresultMale = 10 * weight + 6.25 * height - 5 * age + 5;

  const low = 1.2;
  const light = 1.375;
  const moderate = 1.55;
  const active = 1.725;
  const intensive = 1.9;

  const displayResultsHtml = "";

  console.log(activity);
  if (age < 18) {
    alert(`Age needs to be equal or higher than 18`);
    return;
  }

  if (gender === "female") {
    if (activity === "low") {
      AMRresult = BMRresultFem * low;
    }
    if (activity === "light") {
      AMRresult = BMRresultFem * light;
    }
    if (activity === "moderate") {
      AMRresult = BMRresultFem * moderate;
    }
    if (activity === "active") {
      AMRresult = BMRresultFem * active;
    }
    if (activity === "intensive") {
      AMRresult = BMRresultFem * intensive;
    }

    console.log(AMRresult);
    return;
  }

  if (gender === "male") {
    if (activity === "low") {
      AMRresult = BMRresultMale * low;
    }
    if (activity === "light") {
      AMRresult = BMRresultMale * light;
    }
    if (activity === "moderate") {
      AMRresult = BMRresultMale * moderate;
    }
    if (activity === "active") {
      AMRresult = BMRresultMale * active;
    }
    if (activity === "intensive") {
      AMRresult = BMRresultMale * intensive;
    }

    console.log(AMRresult);
    return;
  }
});

// console.log(age);
// console.log(gender);
// console.log(weight);
// console.log(height);
