function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let resultElement = document.getElementById("result");
  let bmiResult = document.getElementById("bmiresult");

  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    var bmi = weight / (height * height);
    bmiResult.innerHTML = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 18.5) {
      resultElement.innerHTML = "You are underweight!";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultElement.innerHTML = "You are normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultElement.innerHTML = "You are overweight!";
    } else if (bmi >= 30 && bmi <= 39.9) {
      resultElement.innerHTML = "You are under risk of obesity!";
    } else if (bmi >= 40) {
      resultElement.innerHTML = "You are under risk of severe obesity!";
    }
  } else {
    resultElement.innerHTML = "Please enter valid weight and height values.";
  }
}
