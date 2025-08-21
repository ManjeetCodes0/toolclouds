---
title: "BMI Calculator"
categories: [calculators, health]
permalink: /calculators/health/bmi-calculator/
layout: tool
---

<h2>BMI Calculator</h2>
<form id="bmiForm">
  <input type="number" id="weight" placeholder="Weight (kg)">
  <input type="number" id="height" placeholder="Height (cm)">
  <button type="button" onclick="calcBMI()">Calculate</button>
</form>
<p id="bmiResult"></p>

<script>
function calcBMI(){
  let w = document.getElementById('weight').value;
  let h = document.getElementById('height').value / 100;
  let bmi = (w / (h*h)).toFixed(2);
  document.getElementById('bmiResult').innerText = "Your BMI is: " + bmi;
}
</script>
